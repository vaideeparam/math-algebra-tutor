// Main JavaScript file for level selection and UI functionality

document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('Application initializing...');
        
        // Get DOM elements
        const levelSelect = document.getElementById('level-select');
        const formulasBtn = document.getElementById('formulas-btn');
        const resetBtn = document.getElementById('reset-btn');
        const nextProblemBtn = document.getElementById('next-problem-btn');
        const formulasPanel = document.getElementById('formulas-panel');
        const problemDisplay = document.getElementById('problem');
        const currentProblemElem = document.getElementById('current-problem');
        const totalProblemsElem = document.getElementById('total-problems');
        const progressDotsContainer = document.getElementById('progress-dots');
        
        const patternPhase = document.getElementById('pattern-phase');
        const solutionPhase = document.getElementById('solution-phase');
        const startSolutionBtn = document.getElementById('start-solution-btn');
        
        const whatYouSeeSection = document.getElementById('what-you-see-section');
        const keyInsightsSection = document.getElementById('key-insights-section');
        const formulasApplySection = document.getElementById('formulas-apply-section');
        
        const currentStepElem = document.getElementById('current-step');
        const totalStepsElem = document.getElementById('total-steps');
        const stepExplanation = document.getElementById('step-explanation');
        const stepMath = document.getElementById('step-math');
        const stepProgressFill = document.getElementById('step-progress-fill');
        const nextStepBtn = document.getElementById('next-step-btn');

        // Check and log all required elements
        console.log('Element check complete. All elements found:', 
            !!levelSelect && !!formulasBtn && !!resetBtn && !!nextProblemBtn && 
            !!formulasPanel && !!problemDisplay && !!currentProblemElem && 
            !!totalProblemsElem && !!progressDotsContainer && !!patternPhase && 
            !!solutionPhase && !!startSolutionBtn && !!whatYouSeeSection && 
            !!keyInsightsSection && !!formulasApplySection && !!currentStepElem && 
            !!totalStepsElem && !!stepExplanation && !!stepMath && !!stepProgressFill && 
            !!nextStepBtn
        );

        // State variables
        let currentProblemIndex = 0;
        let currentStepIndex = 0;
        let currentPhase = 'pattern';
        let currentSlideIndices = {
            'what-you-see': 0,
            'key-insights': 0,
            'formulas-apply': 0
        };
        let progress = [];
        let currentProblems = [];
        let currentLevel = 'basic';

        // Initially hide the start solution button
        startSolutionBtn.style.display = 'none';

        // Initialize the app with the default level
        initializeLevel(currentLevel);

        // Event listeners
        levelSelect.addEventListener('change', handleLevelChange);
        formulasBtn.addEventListener('click', toggleFormulasPanel);
        resetBtn.addEventListener('click', resetLearning);
        startSolutionBtn.addEventListener('click', startSolution);
        nextStepBtn.addEventListener('click', handleNextStep);
        nextProblemBtn.addEventListener('click', skipToNextProblem);

        // Add event listeners for slide navigation
        setupSlideNavigation('what-you-see');
        setupSlideNavigation('key-insights');
        setupSlideNavigation('formulas-apply');

        // Functions
        function handleLevelChange(event) {
            const newLevel = event.target.value;
            console.log(`Changing level from ${currentLevel} to ${newLevel}`);
            
            // Update body class for level-specific styling
            document.body.classList.remove(`level-${currentLevel}`);
            document.body.classList.add(`level-${newLevel}`);
            
            currentLevel = newLevel;
            initializeLevel(currentLevel);
        }

        function initializeLevel(level) {
            console.log(`Initializing level: ${level}`);
            
            // Set body class for level-specific styling
            document.body.classList.remove('level-basic', 'level-intermediate', 'level-advanced', 'level-challenge');
            document.body.classList.add(`level-${level}`);
            
            // Load problems based on level
            switch(level) {
                case 'basic':
                    currentProblems = basicProblems;
                    break;
                case 'intermediate':
                    currentProblems = intermediateProblems;
                    break;
                case 'advanced':
                    currentProblems = advancedProblems;
                    break;
                case 'challenge':
                    currentProblems = challengeProblems;
                    break;
                default:
                    currentProblems = basicProblems;
            }
            
            // Reset state
            currentProblemIndex = 0;
            progress = Array(currentProblems.length).fill(false);
            resetLearning();
            
            // Update UI
            totalProblemsElem.textContent = currentProblems.length;
            createProgressDots();
            loadProblem(0);
        }

        function createProgressDots() {
            progressDotsContainer.innerHTML = '';
            for (let i = 0; i < currentProblems.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === currentProblemIndex) {
                    dot.classList.add('current');
                } else if (progress[i]) {
                    dot.classList.add('completed');
                }
                progressDotsContainer.appendChild(dot);
            }
        }

        function loadProblem(index) {
            console.log('Loading problem:', index);
            const problem = currentProblems[index];
            if (!problem) {
                console.error('Problem not found at index:', index);
                return;
            }
            
            // Update problem counter
            currentProblemElem.textContent = index + 1;
            
            // Set problem display
            problemDisplay.innerHTML = `$${problem.problem}$`;
            console.log('Problem content set:', problem.problem);
            
            // Load pattern recognition slides
            loadPatternRecognitionSlides(problem);
            
            // Update solution steps information
            totalStepsElem.textContent = problem.steps.length;
            
            // Reset current step
            currentStepIndex = 0;
            updateSolutionStep();
            
            // Refresh MathJax
            typeset();
        }

        function loadPatternRecognitionSlides(problem) {
            console.log('Loading slides for problem:', problem.id);
            // Set "What You See" slides
            setSlides('what-you-see', problem.whatYouSee);
            updateSlideIndicator('what-you-see', problem.whatYouSee.length);
            
            // Set "Key Insights" slides
            setSlides('key-insights', problem.keyInsights);
            updateSlideIndicator('key-insights', problem.keyInsights.length);
            
            // Set "Formulas To Apply" slides
            setSlides('formulas-apply', problem.formulasToApply);
            updateSlideIndicator('formulas-apply', problem.formulasToApply.length);
            
            // Reset current slide indices
            currentSlideIndices = {
                'what-you-see': 0,
                'key-insights': 0,
                'formulas-apply': 0
            };
            
            // Hide sections that should be revealed progressively
            keyInsightsSection.classList.add('hidden');
            formulasApplySection.classList.add('hidden');
            
            // Hide start solution button initially
            startSolutionBtn.style.display = 'none';
            
            // Show only the first slide in each section and reset buttons
            showSlide('what-you-see', 0);
            showSlide('key-insights', 0);
            showSlide('formulas-apply', 0);
            
            updateSlideButtons('what-you-see');
            updateSlideButtons('key-insights');
            updateSlideButtons('formulas-apply');
        }

        function setSlides(sectionId, slides) {
            console.log(`Setting ${slides.length} slides for section ${sectionId}`);
            for (let i = 0; i < 3; i++) {
                const slideElem = document.getElementById(`${sectionId}-slide-${i+1}`);
                if (slideElem) {
                    if (i < slides.length) {
                        // Ensure proper math formatting with delimiters
                        let content = slides[i];
                        
                        // Make sure formulas are properly delimited with $ signs
                        if (content.includes('\\frac') && !content.includes('$\\frac')) {
                            content = content.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, function(match) {
                                // If not already in math delimiters, add them
                                if (!match.startsWith(') && !match.endsWith(')) {
                                    return ' + match + ';
                                }
                                return match;
                            });
                        }
                        
                        slideElem.innerHTML = content;
                        slideElem.style.display = 'block';
                        console.log(`Set content for ${sectionId}-slide-${i+1}:`, content);
                    } else {
                        slideElem.style.display = 'none';
                    }
                } else {
                    console.warn(`Slide element ${sectionId}-slide-${i+1} not found`);
                }
            }
        }

        function updateSlideIndicator(sectionId, totalSlides) {
            const section = document.getElementById(`${sectionId}-section`);
            if (section) {
                const currentSlideElem = section.querySelector('.current-slide');
                const totalSlidesElem = section.querySelector('.total-slides');
                
                if (currentSlideElem) currentSlideElem.textContent = '1';
                if (totalSlidesElem) totalSlidesElem.textContent = totalSlides.toString();
            }
        }

        function setupSlideNavigation(sectionId) {
            const section = document.getElementById(`${sectionId}-section`);
            if (!section) {
                console.warn(`Section ${sectionId}-section not found`);
                return;
            }
            
            const prevBtn = section.querySelector('.prev-slide');
            const nextBtn = section.querySelector('.next-slide');
            
            if (!prevBtn || !nextBtn) {
                console.warn(`Navigation buttons not found in ${sectionId}-section`);
                return;
            }
            
            prevBtn.addEventListener('click', function() {
                console.log(`Prev button clicked in ${sectionId}`);
                if (currentSlideIndices[sectionId] > 0) {
                    currentSlideIndices[sectionId]--;
                    showSlide(sectionId, currentSlideIndices[sectionId]);
                    updateSlideButtons(sectionId);
                }
            });
            
            nextBtn.addEventListener('click', function() {
                console.log(`Next button clicked in ${sectionId}`);
                const maxSlides = getMaxSlides(sectionId);
                console.log(`Max slides: ${maxSlides}, Current slide: ${currentSlideIndices[sectionId]}`);
                
                if (currentSlideIndices[sectionId] < maxSlides - 1) {
                    // Move to next slide within this section
                    currentSlideIndices[sectionId]++;
                    showSlide(sectionId, currentSlideIndices[sectionId]);
                    updateSlideButtons(sectionId);
                    
                    // If we're on the last slide of the formulas section, show the "Start Solution" button
                    if (sectionId === 'formulas-apply' && currentSlideIndices[sectionId] === maxSlides - 1) {
                        startSolutionBtn.style.display = 'flex';
                    }
                } else {
                    // We're on the last slide of the section, move to next section
                    if (sectionId === 'what-you-see') {
                        keyInsightsSection.classList.remove('hidden');
                        // Ensure animation for the new section
                        keyInsightsSection.style.animation = 'none';
                        keyInsightsSection.offsetHeight; // Trigger reflow
                        keyInsightsSection.style.animation = 'fadeIn 0.5s ease';
                        
                        // Update buttons to reflect that we're moving to the next section
                        updateSlideButtons('key-insights');
                    } else if (sectionId === 'key-insights') {
                        formulasApplySection.classList.remove('hidden');
                        // Ensure animation for the new section
                        formulasApplySection.style.animation = 'none';
                        formulasApplySection.offsetHeight; // Trigger reflow
                        formulasApplySection.style.animation = 'fadeIn 0.5s ease';
                        
                        // If formulas section has only one slide, show the start button right away
                        if (getMaxSlides('formulas-apply') === 1) {
                            startSolutionBtn.style.display = 'flex';
                        }
                        
                        // Update buttons to reflect that we're moving to the next section
                        updateSlideButtons('formulas-apply');
                    } else if (sectionId === 'formulas-apply') {
                        // We're at the end of all slides, ensure Start Solution button is shown
                        startSolutionBtn.style.display = 'flex';
                    }
                }
            });
        }

        function showSlide(sectionId, index) {
            const section = document.getElementById(`${sectionId}-section`);
            if (!section) {
                console.warn(`Section ${sectionId}-section not found`);
                return;
            }
            
            const slides = section.querySelectorAll('.slide');
            const currentSlideElem = section.querySelector('.current-slide');
            
            if (slides.length === 0) {
                console.warn(`No slides found in ${sectionId}-section`);
                return;
            }
            
            // Handle case where index is out of bounds
            if (index >= slides.length) {
                console.warn(`Attempted to show slide ${index} but only ${slides.length} slides exist`);
                index = slides.length - 1;
                currentSlideIndices[sectionId] = index;
            }
            
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            if (currentSlideElem) {
                currentSlideElem.textContent = (index + 1).toString();
            }
            
            // Typeset the newly shown slide
            typeset();
        }

        function updateSlideButtons(sectionId) {
            const section = document.getElementById(`${sectionId}-section`);
            if (!section) return;
            
            const prevBtn = section.querySelector('.prev-slide');
            const nextBtn = section.querySelector('.next-slide');
            const maxSlides = getMaxSlides(sectionId);
            
            if (prevBtn) {
                prevBtn.disabled = currentSlideIndices[sectionId] === 0;
            }
            
            if (nextBtn) {
                const isLastSlide = currentSlideIndices[sectionId] === maxSlides - 1;
                const isLastSection = sectionId === 'formulas-apply';
                
                if (isLastSlide && isLastSection) {
                    // We're at the very end of all slides
                    // Show start solution button and disable next button
                    startSolutionBtn.style.display = 'flex';
                }
                
                // The next button is never disabled unless we're at the end of all sections
                nextBtn.disabled = false;
            }
        }

        function getMaxSlides(sectionId) {
            if (!currentProblems[currentProblemIndex]) {
                console.warn('Current problem not found');
                return 0;
            }
            
            if (sectionId === 'what-you-see') {
                return currentProblems[currentProblemIndex].whatYouSee.length;
            } else if (sectionId === 'key-insights') {
                return currentProblems[currentProblemIndex].keyInsights.length;
            } else if (sectionId === 'formulas-apply') {
                return currentProblems[currentProblemIndex].formulasToApply.length;
            }
            return 0;
        }

        function toggleFormulasPanel() {
            formulasPanel.classList.toggle('hidden');
            
            if (formulasPanel.classList.contains('hidden')) {
                formulasBtn.innerHTML = '<i class="fas fa-book"></i> Show Formulas';
            } else {
                formulasBtn.innerHTML = '<i class="fas fa-book"></i> Hide Formulas';
                typeset();
            }
        }

        function resetLearning() {
            console.log('Resetting learning');
            // Reset phase
            currentPhase = 'pattern';
            patternPhase.classList.remove('hidden');
            solutionPhase.classList.add('hidden');
            
            // Reset slide indices
            currentSlideIndices = {
                'what-you-see': 0,
                'key-insights': 0,
                'formulas-apply': 0
            };
            
            // Hide insights and formulas sections
            keyInsightsSection.classList.add('hidden');
            formulasApplySection.classList.add('hidden');
            
            // Reset slides
            showSlide('what-you-see', 0);
            showSlide('key-insights', 0);
            showSlide('formulas-apply', 0);
            
            // Update slide buttons
            updateSlideButtons('what-you-see');
            updateSlideButtons('key-insights');
            updateSlideButtons('formulas-apply');
            
            // Hide start solution button
            startSolutionBtn.style.display = 'none';
            
            // Reset step index
            currentStepIndex = 0;
            updateSolutionStep();
            
            // Load the same problem again
            loadProblem(currentProblemIndex);
        }

        function startSolution() {
            console.log('Starting solution phase');
            currentPhase = 'solution';
            patternPhase.classList.add('hidden');
            solutionPhase.classList.remove('hidden');
            
            // Reset step index
            currentStepIndex = 0;
            updateSolutionStep();
            
            // Typeset
            typeset();
        }

        function updateSolutionStep() {
            const problem = currentProblems[currentProblemIndex];
            if (!problem || !problem.steps || currentStepIndex >= problem.steps.length) {
                console.error("Step data not available");
                return;
            }
            
            const step = problem.steps[currentStepIndex];
            
            currentStepElem.textContent = currentStepIndex + 1;
            stepExplanation.textContent = step.explanation;
            stepMath.innerHTML = `$${step.math}$`;
            
            // Update progress bar
            const progressPercentage = ((currentStepIndex + 1) / problem.steps.length) * 100;
            stepProgressFill.style.width = `${progressPercentage}%`;
            
            // Update button text
            if (currentStepIndex === problem.steps.length - 1) {
                nextStepBtn.innerHTML = 'Next Problem <i class="fas fa-arrow-right"></i>';
            } else {
                nextStepBtn.innerHTML = 'Next Step <i class="fas fa-arrow-right"></i>';
            }
            
            // Typeset the math
            typeset();
        }

        function handleNextStep() {
            console.log('Handle next step');
            const problem = currentProblems[currentProblemIndex];
            
            if (currentStepIndex < problem.steps.length - 1) {
                // Move to next step
                currentStepIndex++;
                updateSolutionStep();
            } else {
                // Mark current problem as completed
                progress[currentProblemIndex] = true;
                
                // Move to next problem
                currentProblemIndex = (currentProblemIndex + 1) % currentProblems.length;
                
                // Reset learning phases
                resetLearning();
                
                // Update progress dots
                createProgressDots();
                
                // Load next problem
                loadProblem(currentProblemIndex);
            }
        }
        
        function skipToNextProblem() {
            console.log('Skipping to next problem');
            // Mark current problem as completed
            progress[currentProblemIndex] = true;
            
            // Move to next problem
            currentProblemIndex = (currentProblemIndex + 1) % currentProblems.length;
            
            // Reset learning phases
            resetLearning();
            
            // Update progress dots
            createProgressDots();
            
            // Load next problem
            loadProblem(currentProblemIndex);
        }

        function typeset() {
            console.log('Typesetting math');
            try {
                // Add a slight delay to ensure content is in the DOM
                setTimeout(function() {
                    if (window.MathJax) {
                        if (window.MathJax.typesetPromise) {
                            // MathJax v3
                            window.MathJax.typesetPromise()
                                .catch(function(err) {
                                    console.error('MathJax typesetting failed: ', err);
                                });
                        } else if (window.MathJax.Hub && window.MathJax.Hub.Queue) {
                            // MathJax v2
                            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
                        } else {
                            console.warn('MathJax is available but typeset method not found');
                        }
                    } else {
                        console.warn('MathJax not available for typesetting');
                    }
                }, 100); // Small delay to ensure DOM is updated
            } catch (error) {
                console.error('Error during typesetting:', error);
            }
        }
    } catch (error) {
        console.error("Error initializing application:", error);
        alert("There was an error initializing the application. Check the console for details.");
    }
});