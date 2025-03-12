// Basic level algebraic fraction problems
const basicProblems = [
    {
        id: 1,
        problem: "\\frac{2x}{x^2-4} + \\frac{3}{x+2}",
        whatYouSee: [
            "Two algebraic fractions being added with different denominators",
            "First denominator $x^2-4$ is a difference of squares",
            "Second denominator $(x+2)$ is a factor of the first denominator"
        ],
        keyInsights: [
            "When you see $x^2-4$, recognize it as $x^2-2^2$, a difference of squares",
            "Notice that the second denominator is already a factor of the first",
            "We can convert to the more complex denominator to add these fractions"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator using the difference of squares formula",
                math: "\\frac{2x}{(x+2)(x-2)} + \\frac{3}{x+2}"
            },
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = (x+2)(x-2)"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{3}{x+2} = \\frac{3(x-2)}{(x+2)(x-2)}"
            },
            {
                explanation: "Write both fractions with the common denominator",
                math: "\\frac{2x}{(x+2)(x-2)} + \\frac{3(x-2)}{(x+2)(x-2)}"
            },
            {
                explanation: "Add the numerators",
                math: "\\frac{2x + 3(x-2)}{(x+2)(x-2)}"
            },
            {
                explanation: "Expand the numerator",
                math: "\\frac{2x + 3x - 6}{(x+2)(x-2)}"
            },
            {
                explanation: "Combine like terms in the numerator",
                math: "\\frac{5x - 6}{(x+2)(x-2)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{5x - 6}{x^2-4}"
            }
        ]
    },
    {
        id: 2,
        problem: "\\frac{1}{x-3} - \\frac{2}{x^2-9}",
        whatYouSee: [
            "Two algebraic fractions being subtracted with different denominators",
            "Second denominator $x^2-9$ is a difference of squares",
            "First denominator $(x-3)$ could be a factor of the second denominator"
        ],
        keyInsights: [
            "When you see $x^2-9$, recognize it as $x^2-3^2$, a difference of squares",
            "Factor to check if denominators are related: $x^2-9 = (x+3)(x-3)$",
            "When a denominator is already a factor of another, use the more complex denominator as the LCD"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the second denominator using the difference of squares formula",
                math: "\\frac{1}{x-3} - \\frac{2}{(x+3)(x-3)}"
            },
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = (x+3)(x-3)"
            },
            {
                explanation: "Convert the first fraction to have the LCD as denominator",
                math: "\\frac{1}{x-3} = \\frac{1(x+3)}{(x-3)(x+3)}"
            },
            {
                explanation: "Write both fractions with the common denominator",
                math: "\\frac{1(x+3)}{(x-3)(x+3)} - \\frac{2}{(x+3)(x-3)}"
            },
            {
                explanation: "Subtraction with common denominator",
                math: "\\frac{(x+3) - 2}{(x+3)(x-3)}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{x+3-2}{(x+3)(x-3)}"
            },
            {
                explanation: "Combine like terms in the numerator",
                math: "\\frac{x+1}{(x+3)(x-3)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x+1}{x^2-9}"
            }
        ]
    },
    {
        id: 3,
        problem: "\\frac{x+2}{x^2+2x} - \\frac{1}{x}",
        whatYouSee: [
            "Two algebraic fractions with different denominators",
            "First denominator $x^2+2x$ has a common factor of $x$",
            "Second denominator is simply $x$"
        ],
        keyInsights: [
            "When you see $x^2+2x$, factor out the common term: $x(x+2)$",
            "Notice that $x$ is a factor of the first denominator",
            "We need to find a common denominator to subtract these fractions"
        ],
        formulasToApply: [
            "Factor out common terms: $ax+ab = a(x+b)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator by taking out the common factor $x$",
                math: "\\frac{x+2}{x(x+2)} - \\frac{1}{x}"
            },
            {
                explanation: "Simplify the first fraction",
                math: "\\frac{1}{x} - \\frac{1}{x}"
            },
            {
                explanation: "Subtract fractions with common denominator",
                math: "\\frac{1-1}{x}"
            },
            {
                explanation: "Simplify the final result",
                math: "\\frac{0}{x} = 0"
            }
        ]
    },
    {
        id: 4,
        problem: "\\frac{2}{x} + \\frac{3}{y}",
        whatYouSee: [
            "Two algebraic fractions being added with different denominators",
            "Simple denominators with no common factors",
            "Need to find the least common denominator (LCD)"
        ],
        keyInsights: [
            "When denominators have no common factors, the LCD is their product",
            "We convert each fraction to have the LCD as denominator",
            "Then add the numerators while keeping the common denominator"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = xy"
            },
            {
                explanation: "Convert the first fraction to have the LCD as denominator",
                math: "\\frac{2}{x} = \\frac{2y}{xy}"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{3}{y} = \\frac{3x}{xy}"
            },
            {
                explanation: "Write both fractions with the common denominator",
                math: "\\frac{2y}{xy} + \\frac{3x}{xy}"
            },
            {
                explanation: "Add the numerators",
                math: "\\frac{2y + 3x}{xy}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{2y + 3x}{xy}"
            }
        ]
    },
    {
        id: 5,
        problem: "\\frac{\\frac{1}{a} + \\frac{1}{b}}{\\frac{1}{a} - \\frac{1}{b}}",
        whatYouSee: [
            "A complex fraction with simpler fractions in both numerator and denominator",
            "Both the numerator and denominator involve fractions with $a$ and $b$",
            "We need to simplify the top and bottom separately first"
        ],
        keyInsights: [
            "For complex fractions, simplify the numerator and denominator separately first",
            "Find common denominators within the top and bottom expressions",
            "Then divide the simplified numerator by the simplified denominator"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division of fractions: $\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Simplify the numerator of the complex fraction",
                math: "\\frac{1}{a} + \\frac{1}{b} = \\frac{b}{ab} + \\frac{a}{ab} = \\frac{a+b}{ab}"
            },
            {
                explanation: "Simplify the denominator of the complex fraction",
                math: "\\frac{1}{a} - \\frac{1}{b} = \\frac{b}{ab} - \\frac{a}{ab} = \\frac{b-a}{ab}"
            },
            {
                explanation: "Rewrite the original complex fraction with the simplified parts",
                math: "\\frac{\\frac{a+b}{ab}}{\\frac{b-a}{ab}}"
            },
            {
                explanation: "Apply the formula for dividing fractions",
                math: "\\frac{a+b}{ab} \\div \\frac{b-a}{ab} = \\frac{a+b}{ab} \\times \\frac{ab}{b-a} = \\frac{(a+b)ab}{ab(b-a)}"
            },
            {
                explanation: "Simplify by canceling the common factor $ab$",
                math: "\\frac{a+b}{b-a}"
            },
            {
                explanation: "The denominator $b-a$ can be written as $-(a-b)$",
                math: "\\frac{a+b}{-(a-b)} = -\\frac{a+b}{a-b}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{a+b}{a-b}"
            }
        ]
    },
    {
        id: 6,
        problem: "\\frac{4}{x-2} - \\frac{3}{2-x}",
        whatYouSee: [
            "Two algebraic fractions being subtracted with different denominators",
            "The denominators look different but may be related",
            "Notice that $(2-x)$ is the negative of $(x-2)$"
        ],
        keyInsights: [
            "When you see $2-x$ and $x-2$, recognize that $2-x = -(x-2)$",
            "We can rewrite one fraction to match denominators exactly",
            "We'll need to be careful with signs when rewriting"
        ],
        formulasToApply: [
            "Negative in denominator: $\\frac{a}{-b} = -\\frac{a}{b}$",
            "Subtraction with common denominator: $\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}$"
        ],
        steps: [
            {
                explanation: "Rewrite the second fraction with the negative in the numerator instead of denominator",
                math: "\\frac{4}{x-2} - \\frac{3}{2-x} = \\frac{4}{x-2} - \\frac{3}{-(x-2)} = \\frac{4}{x-2} + \\frac{3}{x-2}"
            },
            {
                explanation: "Add fractions with the same denominator",
                math: "\\frac{4 + 3}{x-2}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{7}{x-2}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{7}{x-2}"
            }
        ]
    },
    {
        id: 7,
        problem: "\\frac{x}{x^2+4x+4} - \\frac{1}{x+2}",
        whatYouSee: [
            "Two algebraic fractions with different denominators",
            "First denominator $x^2+4x+4$ looks like a perfect square trinomial",
            "Second denominator is $x+2$"
        ],
        keyInsights: [
            "When you see $x^2+4x+4$, check if it's a perfect square: $(x+2)^2$",
            "First denominator factors to $(x+2)^2$",
            "We can convert to a common denominator using this factorization"
        ],
        formulasToApply: [
            "Perfect square trinomial: $a^2+2ab+b^2 = (a+b)^2$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator as a perfect square trinomial",
                math: "\\frac{x}{(x+2)^2} - \\frac{1}{x+2}"
            },
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = (x+2)^2"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{1}{x+2} = \\frac{1(x+2)}{(x+2)(x+2)} = \\frac{x+2}{(x+2)^2}"
            },
            {
                explanation: "Write both fractions with the common denominator",
                math: "\\frac{x}{(x+2)^2} - \\frac{x+2}{(x+2)^2}"
            },
            {
                explanation: "Subtract the numerators",
                math: "\\frac{x - (x+2)}{(x+2)^2}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{x - x - 2}{(x+2)^2}"
            },
            {
                explanation: "Combine like terms in the numerator",
                math: "\\frac{-2}{(x+2)^2}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{-2}{(x+2)^2}"
            }
        ]
    },
    {
        id: 8,
        problem: "\\frac{x-3}{x^2-9} + \\frac{2}{x+3}",
        whatYouSee: [
            "Two algebraic fractions with different denominators",
            "First denominator $x^2-9$ is a difference of squares",
            "Second denominator $x+3$ may be a factor of the first"
        ],
        keyInsights: [
            "Recognize $x^2-9$ as a difference of squares: $x^2-3^2$",
            "Factor: $x^2-9 = (x+3)(x-3)$",
            "Notice that one of the factors matches the second denominator"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator using the difference of squares formula",
                math: "\\frac{x-3}{(x+3)(x-3)} + \\frac{2}{x+3}"
            },
            {
                explanation: "Simplify the first fraction by canceling the common factor $x-3$",
                math: "\\frac{1}{x+3} + \\frac{2}{x+3}"
            },
            {
                explanation: "Add fractions with common denominator",
                math: "\\frac{1+2}{x+3}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{3}{x+3}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{3}{x+3}"
            }
        ]
    },
    {
        id: 9,
        problem: "\\frac{2x+1}{x^2+x} - \\frac{1}{x}",
        whatYouSee: [
            "Two algebraic fractions being subtracted with different denominators",
            "First denominator $x^2+x$ has a common factor $x$",
            "Second denominator is $x$"
        ],
        keyInsights: [
            "Factor out the common term in the first denominator: $x^2+x = x(x+1)$",
            "Notice that the second denominator $x$ is a factor of the first",
            "We'll need the LCD to subtract these fractions"
        ],
        formulasToApply: [
            "Factor out common terms: $ax+a = a(x+1)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator",
                math: "\\frac{2x+1}{x(x+1)} - \\frac{1}{x}"
            },
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = x(x+1)"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{1}{x} = \\frac{1(x+1)}{x(x+1)}"
            },
            {
                explanation: "Write both fractions with the common denominator",
                math: "\\frac{2x+1}{x(x+1)} - \\frac{x+1}{x(x+1)}"
            },
            {
                explanation: "Subtract the numerators",
                math: "\\frac{(2x+1) - (x+1)}{x(x+1)}"
            },
            {
                explanation: "Expand and simplify the numerator",
                math: "\\frac{2x+1-x-1}{x(x+1)}"
            },
            {
                explanation: "Combine like terms in the numerator",
                math: "\\frac{x}{x(x+1)}"
            },
            {
                explanation: "Simplify by canceling the common factor $x$",
                math: "\\frac{1}{x+1}"
            }
        ]
    },
    {
        id: 10,
        problem: "\\frac{x^2}{x-1} - \\frac{x(x+1)}{x-1}",
        whatYouSee: [
            "Two algebraic fractions with the same denominator",
            "The numerators contain different algebraic expressions",
            "We can directly subtract when denominators are the same"
        ],
        keyInsights: [
            "When fractions have the same denominator, simply subtract the numerators",
            "Expand $x(x+1) = x^2 + x$ to help with the subtraction",
            "Look for potential simplifications after subtraction"
        ],
        formulasToApply: [
            "Subtraction with same denominator: $\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}$",
            "Distributive property: $a(b+c) = ab + ac$"
        ],
        steps: [
            {
                explanation: "Expand the second numerator",
                math: "\\frac{x^2}{x-1} - \\frac{x^2+x}{x-1}"
            },
            {
                explanation: "Subtract with the same denominator",
                math: "\\frac{x^2 - (x^2+x)}{x-1}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{x^2 - x^2 - x}{x-1}"
            },
            {
                explanation: "Combine like terms in the numerator",
                math: "\\frac{-x}{x-1}"
            },
            {
                explanation: "Factor out the negative sign",
                math: "\\frac{-x}{x-1} = -\\frac{x}{x-1}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{x}{x-1}"
            }
        ]
    }
];
