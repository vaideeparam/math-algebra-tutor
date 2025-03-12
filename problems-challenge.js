// Challenge level algebraic fraction problems
const challengeProblems = [
    {
        id: 1,
        problem: "\\frac{x^3-8}{x^2-4} \\div \\frac{x-2}{x+2}",
        whatYouSee: [
            "Division of two algebraic fractions with complex expressions",
            "The numerator $x^3-8$ might be factorizable as a difference of cubes",
            "The denominator $x^2-4$ is a difference of squares"
        ],
        keyInsights: [
            "Recognize that $x^3-8 = x^3-2^3$, which is a difference of cubes",
            "Factor $x^3-8 = (x-2)(x^2+2x+4)$",
            "Factor $x^2-4 = (x+2)(x-2)$",
            "After factoring, look for common terms that can be canceled"
        ],
        formulasToApply: [
            "Difference of cubes: $a^3-b^3 = (a-b)(a^2+ab+b^2)$",
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor the numerator and denominator of the first fraction",
                math: "\\frac{(x-2)(x^2+2x+4)}{(x+2)(x-2)} \\div \\frac{x-2}{x+2}"
            },
            {
                explanation: "Simplify the first fraction by canceling the common factor $(x-2)$",
                math: "\\frac{x^2+2x+4}{x+2} \\div \\frac{x-2}{x+2}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{x^2+2x+4}{x+2} \\times \\frac{x+2}{x-2}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{x^2+2x+4}{\\cancel{x+2}} \\times \\frac{\\cancel{x+2}}{x-2}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{x^2+2x+4}{x-2}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x^2+2x+4}{x-2}"
            }
        ]
    },
    {
        id: 2,
        problem: "\\frac{\\frac{x-y}{1} - \\frac{x^2-y^2}{x+y}}{\\frac{x^3-y^3}{x^2-y^2}}",
        whatYouSee: [
            "A complex fraction with subtraction in the numerator",
            "The denominator contains expressions with both $x$ and $y$",
            "Several factorizable expressions like $x^2-y^2$ and $x^3-y^3$"
        ],
        keyInsights: [
            "Simplify the numerator first by finding a common denominator",
            "Recognize that $x^2-y^2 = (x+y)(x-y)$",
            "Recognize that $x^3-y^3 = (x-y)(x^2+xy+y^2)$",
            "Look for cancelations after factoring"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Difference of cubes: $a^3-b^3 = (a-b)(a^2+ab+b^2)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Simplify the first fraction in the numerator",
                math: "\\frac{(x-y) - \\frac{x^2-y^2}{x+y}}{\\frac{x^3-y^3}{x^2-y^2}}"
            },
            {
                explanation: "Factor $x^2-y^2$ in the second term of the numerator",
                math: "\\frac{(x-y) - \\frac{(x+y)(x-y)}{x+y}}{\\frac{x^3-y^3}{x^2-y^2}}"
            },
            {
                explanation: "Simplify the second term in the numerator",
                math: "\\frac{(x-y) - (x-y)}{\\frac{x^3-y^3}{x^2-y^2}}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{0}{\\frac{x^3-y^3}{x^2-y^2}}"
            },
            {
                explanation: "Any fraction with numerator 0 equals 0",
                math: "0"
            }
        ]
    },
    {
        id: 3,
        problem: "\\lim_{h \\to 0} \\frac{(x+h)^2(y+h)-(x^2)(y)}{h}",
        whatYouSee: [
            "A limit expression with $h$ approaching 0",
            "A fraction with $h$ in the denominator",
            "This is a derivative-related expression for the function $f(x,y) = x^2y$"
        ],
        keyInsights: [
            "Expand $(x+h)^2(y+h)$ to find terms with and without $h$",
            "Group terms by powers of $h$",
            "Factor out $h$ from the numerator to cancel with the denominator"
        ],
        formulasToApply: [
            "Expanding a binomial squared: $(a+b)^2 = a^2+2ab+b^2$",
            "Distributive property: $a(b+c) = ab + ac$",
            "Factoring out common terms: $ah + bh = h(a + b)$"
        ],
        steps: [
            {
                explanation: "Expand $(x+h)^2$",
                math: "\\lim_{h \\to 0} \\frac{(x^2+2xh+h^2)(y+h)-(x^2)(y)}{h}"
            },
            {
                explanation: "Distribute $(y+h)$",
                math: "\\lim_{h \\to 0} \\frac{x^2y+x^2h+2xhy+2xh^2+h^2y+h^3-x^2y}{h}"
            },
            {
                explanation: "Cancel the terms $x^2y$ and $-x^2y$",
                math: "\\lim_{h \\to 0} \\frac{x^2h+2xhy+2xh^2+h^2y+h^3}{h}"
            },
            {
                explanation: "Factor out $h$ from the numerator",
                math: "\\lim_{h \\to 0} \\frac{h(x^2+2xy+2xh+hy+h^2)}{h}"
            },
            {
                explanation: "Cancel the common factor $h$",
                math: "\\lim_{h \\to 0} (x^2+2xy+2xh+hy+h^2)"
            },
            {
                explanation: "Evaluate the limit as $h$ approaches 0",
                math: "x^2+2xy+0+0+0 = x^2+2xy"
            },
            {
                explanation: "Write the final result",
                math: "x^2+2xy"
            }
        ]
    },
    {
        id: 4,
        problem: "\\frac{x^4-16}{x^3-8} \\div \\frac{x^2+4}{x-2}",
        whatYouSee: [
            "Division of two algebraic fractions with higher degree expressions",
            "The numerator and denominator of the first fraction are differences of powers",
            "The second fraction has a sum in the numerator"
        ],
        keyInsights: [
            "Factor $x^4-16 = (x^2+4)(x^2-4) = (x^2+4)(x+2)(x-2)$",
            "Factor $x^3-8 = (x-2)(x^2+2x+4)$",
            "To divide by a fraction, multiply by its reciprocal and look for cancelations"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Difference of 4th powers: $a^4-b^4 = (a^2+b^2)(a^2-b^2) = (a^2+b^2)(a+b)(a-b)$",
            "Difference of cubes: $a^3-b^3 = (a-b)(a^2+ab+b^2)$"
        ],
        steps: [
            {
                explanation: "Factor the numerator of the first fraction",
                math: "\\frac{(x^2+4)(x+2)(x-2)}{x^3-8} \\div \\frac{x^2+4}{x-2}"
            },
            {
                explanation: "Factor the denominator of the first fraction",
                math: "\\frac{(x^2+4)(x+2)(x-2)}{(x-2)(x^2+2x+4)} \\div \\frac{x^2+4}{x-2}"
            },
            {
                explanation: "Simplify the first fraction by canceling the common factor $(x-2)$",
                math: "\\frac{(x^2+4)(x+2)}{(x^2+2x+4)} \\div \\frac{x^2+4}{x-2}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{(x^2+4)(x+2)}{(x^2+2x+4)} \\times \\frac{x-2}{x^2+4}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(x^2+4)}(x+2)}{(x^2+2x+4)} \\times \\frac{x-2}{\\cancel{x^2+4}}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{(x+2)(x-2)}{(x^2+2x+4)}"
            },
            {
                explanation: "Recognize that $(x+2)(x-2) = x^2-4$",
                math: "\\frac{x^2-4}{x^2+2x+4}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x^2-4}{x^2+2x+4}"
            }
        ]
    },
    {
        id: 5,
        problem: "\\frac{\\frac{1}{x+y} + \\frac{1}{x-y}}{\\frac{1}{(x+y)^2} - \\frac{1}{(x-y)^2}}",
        whatYouSee: [
            "A complex fraction with addition in the numerator and subtraction in the denominator",
            "Denominators involve binomials and their squares",
            "We need to simplify systematically, working with the inner fractions first"
        ],
        keyInsights: [
            "Find common denominators for the fractions in the numerator",
            "Find common denominators for the fractions in the denominator",
            "Look for patterns and factorizations that might simplify the expression"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Find a common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{(x-y)+(x+y)}{(x+y)(x-y)}}{\\frac{1}{(x+y)^2} - \\frac{1}{(x-y)^2}}"
            },
            {
                explanation: "Simplify the numerator of the complex fraction",
                math: "\\frac{\\frac{2x}{(x+y)(x-y)}}{\\frac{1}{(x+y)^2} - \\frac{1}{(x-y)^2}}"
            },
            {
                explanation: "Find a common denominator for the fractions in the denominator",
                math: "\\frac{\\frac{2x}{(x+y)(x-y)}}{\\frac{(x-y)^2-(x+y)^2}{(x+y)^2(x-y)^2}}"
            },
            {
                explanation: "Recognize that $(x-y)^2-(x+y)^2 = (x-y-x-y)(x-y+x+y) = -4y \cdot 2x = -8xy$",
                math: "\\frac{\\frac{2x}{(x+y)(x-y)}}{\\frac{-8xy}{(x+y)^2(x-y)^2}}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{2x}{(x+y)(x-y)} \\times \\frac{(x+y)^2(x-y)^2}{-8xy}"
            },
            {
                explanation: "Rearrange and simplify",
                math: "\\frac{2x(x+y)(x-y)}{(x+y)(x-y)} \\times \\frac{(x+y)(x-y)}{-8xy}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{2x\\cancel{(x+y)(x-y)}}{\\cancel{(x+y)(x-y)}} \\times \\frac{(x+y)(x-y)}{-8xy}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{2x(x+y)(x-y)}{-8xy}"
            },
            {
                explanation: "Recognize that $(x+y)(x-y) = x^2-y^2$",
                math: "\\frac{2x(x^2-y^2)}{-8xy}"
            },
            {
                explanation: "Simplify by dividing numerator and denominator by common factors",
                math: "\\frac{2x(x^2-y^2)}{-8xy} = \\frac{(x^2-y^2)}{-4y}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{x^2-y^2}{4y}"
            }
        ]
    },
    {
        id: 6,
        problem: "\\frac{\\frac{1}{a-b} - \\frac{1}{b-c}}{\\frac{1}{c-a}}",
        whatYouSee: [
            "A complex fraction with subtraction in the numerator",
            "Three variables $a$, $b$, and $c$ appear in the denominators",
            "The pattern of denominators suggests potential for simplification"
        ],
        keyInsights: [
            "Find a common denominator for the fractions in the numerator",
            "Note that $\\frac{1}{b-c} = -\\frac{1}{c-b}$",
            "Look for a pattern in the simplified expression"
        ],
        formulasToApply: [
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Negative in denominator: $\\frac{a}{-b} = -\\frac{a}{b}$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Write the complex fraction as a division",
                math: "\\left(\\frac{1}{a-b} - \\frac{1}{b-c}\\right) \\div \\frac{1}{c-a}"
            },
            {
                explanation: "Rewrite $\\frac{1}{b-c}$ with a negative sign",
                math: "\\left(\\frac{1}{a-b} + \\frac{1}{c-b}\\right) \\div \\frac{1}{c-a}"
            },
            {
                explanation: "Find a common denominator for the fractions in parentheses",
                math: "\\left(\\frac{(c-b)+(a-b)}{(a-b)(c-b)}\\right) \\div \\frac{1}{c-a}"
            },
            {
                explanation: "Simplify the numerator in the parentheses",
                math: "\\left(\\frac{c-b+a-b}{(a-b)(c-b)}\\right) \\div \\frac{1}{c-a}"
            },
            {
                explanation: "Combine like terms",
                math: "\\left(\\frac{a+c-2b}{(a-b)(c-b)}\\right) \\div \\frac{1}{c-a}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{a+c-2b}{(a-b)(c-b)} \\times (c-a)"
            },
            {
                explanation: "Multiply",
                math: "\\frac{(a+c-2b)(c-a)}{(a-b)(c-b)}"
            },
            {
                explanation: "Rewrite with negative terms to match the pattern",
                math: "\\frac{(a+c-2b)(c-a)}{(a-b)(c-b)}"
            },
            {
                explanation: "Recognize the pattern in the denominators",
                math: "\\frac{(a+c-2b)(c-a)}{(a-b)(c-b)} = -\\frac{(a+c-2b)(a-c)}{(a-b)(c-b)}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{(a+c-2b)(a-c)}{(a-b)(c-b)}"
            }
        ]
    },
    {
        id: 7,
        problem: "\\lim_{h \\to 0} \\frac{\\sqrt{a+h}-\\sqrt{a}}{h}",
        whatYouSee: [
            "A limit expression with $h$ approaching 0",
            "A fraction with $h$ in the denominator",
            "Square roots in the numerator, suggesting the need for rationalization"
        ],
        keyInsights: [
            "Use the difference of squares formula to rationalize the numerator",
            "Multiply both numerator and denominator by $\\sqrt{a+h}+\\sqrt{a}$",
            "Then factor out $h$ from the numerator to cancel with the denominator"
        ],
        formulasToApply: [
            "Rationalizing the numerator: $\\frac{\\sqrt{a}-\\sqrt{b}}{c} = \\frac{(\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b})}{c(\\sqrt{a}+\\sqrt{b})} = \\frac{a-b}{c(\\sqrt{a}+\\sqrt{b})}$",
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$"
        ],
        steps: [
            {
                explanation: "Rationalize the numerator by multiplying by $\\frac{\\sqrt{a+h}+\\sqrt{a}}{\\sqrt{a+h}+\\sqrt{a}}$",
                math: "\\lim_{h \\to 0} \\frac{(\\sqrt{a+h}-\\sqrt{a})(\\sqrt{a+h}+\\sqrt{a})}{h(\\sqrt{a+h}+\\sqrt{a})}"
            },
            {
                explanation: "Apply the difference of squares formula in the numerator",
                math: "\\lim_{h \\to 0} \\frac{(a+h)-a}{h(\\sqrt{a+h}+\\sqrt{a})}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\lim_{h \\to 0} \\frac{h}{h(\\sqrt{a+h}+\\sqrt{a})}"
            },
            {
                explanation: "Cancel the common factor $h$",
                math: "\\lim_{h \\to 0} \\frac{1}{\\sqrt{a+h}+\\sqrt{a}}"
            },
            {
                explanation: "Evaluate the limit as $h$ approaches 0",
                math: "\\frac{1}{\\sqrt{a}+\\sqrt{a}} = \\frac{1}{2\\sqrt{a}}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{1}{2\\sqrt{a}}"
            }
        ]
    },
    {
        id: 8,
        problem: "\\frac{1}{1-\\frac{1}{1-\\frac{1}{x}}}",
        whatYouSee: [
            "A nested complex fraction with multiple levels",
            "We need to simplify from the innermost fraction outward",
            "This is a continued fraction expression"
        ],
        keyInsights: [
            "Work from the inside out, simplifying each level of the complex fraction",
            "For each level, convert the complex fraction to a regular fraction",
            "Look for patterns or common structures as you simplify"
        ],
        formulasToApply: [
            "Simplifying complex fractions: $\\frac{1}{1-\\frac{a}{b}} = \\frac{b}{b-a}$",
            "Fraction addition/subtraction: $\\frac{a}{b} ± \\frac{c}{d} = \\frac{ad ± bc}{bd}$"
        ],
        steps: [
            {
                explanation: "Start with the innermost fraction",
                math: "\\frac{1}{1-\\frac{1}{x}}"
            },
            {
                explanation: "Simplify the denominator of the inner fraction",
                math: "\\frac{1}{\\frac{x-1}{x}} = \\frac{x}{x-1}"
            },
            {
                explanation: "Now simplify the middle level of the complex fraction",
                math: "\\frac{1}{1-\\frac{x}{x-1}}"
            },
            {
                explanation: "Find a common denominator in the second level",
                math: "\\frac{1}{1-\\frac{x}{x-1}} = \\frac{1}{\\frac{x-1}{x-1}-\\frac{x}{x-1}} = \\frac{1}{\\frac{x-1-x}{x-1}}"
            },
            {
                explanation: "Simplify the expression in the denominator",
                math: "\\frac{1}{\\frac{-1}{x-1}} = \\frac{x-1}{-1} = -(x-1)"
            },
            {
                explanation: "Simplify the negative sign",
                math: "-(x-1) = -x+1"
            },
            {
                explanation: "Write the final result",
                math: "-x+1"
            }
        ]
    },
    {
        id: 9,
        problem: "\\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin(x)}{h}",
        whatYouSee: [
            "A limit expression with $h$ approaching 0",
            "Trigonometric functions in the numerator",
            "This is the difference quotient for the sine function, which approximates its derivative"
        ],
        keyInsights: [
            "Use the identity $\\sin(A) - \\sin(B) = 2\\sin\\frac{A-B}{2}\\cos\\frac{A+B}{2}$",
            "Substitute $A = x+h$ and $B = x$",
            "Factor out $h$ from the numerator to cancel with the denominator"
        ],
        formulasToApply: [
            "Trigonometric identity: $\\sin(A) - \\sin(B) = 2\\sin\\frac{A-B}{2}\\cos\\frac{A+B}{2}$",
            "Limit: $\\lim_{h \\to 0} \\frac{\\sin(h)}{h} = 1$"
        ],
        steps: [
            {
                explanation: "Apply the trigonometric identity for the difference of sines",
                math: "\\lim_{h \\to 0} \\frac{2\\sin\\frac{h}{2}\\cos\\frac{2x+h}{2}}{h}"
            },
            {
                explanation: "Simplify the cosine term",
                math: "\\lim_{h \\to 0} \\frac{2\\sin\\frac{h}{2}\\cos(x+\\frac{h}{2})}{h}"
            },
            {
                explanation: "Rewrite to use the limit of sine over its argument",
                math: "\\lim_{h \\to 0} \\left(\\frac{\\sin\\frac{h}{2}}{\\frac{h}{2}}\\cdot\\frac{h}{2}\\cdot\\frac{2}{h}\\cdot\\cos(x+\\frac{h}{2})\\right)"
            },
            {
                explanation: "Rearrange terms",
                math: "\\lim_{h \\to 0} \\left(\\frac{\\sin\\frac{h}{2}}{\\frac{h}{2}}\\cdot\\cos(x+\\frac{h}{2})\\right)"
            },
            {
                explanation: "Use the limit $\\lim_{h \\to 0} \\frac{\\sin(h)}{h} = 1$",
                math: "\\lim_{h \\to 0} (1 \\cdot \\cos(x+\\frac{h}{2}))"
            },
            {
                explanation: "Evaluate the limit as $h$ approaches 0",
                math: "\\cos(x+0) = \\cos(x)"
            },
            {
                explanation: "Write the final result",
                math: "\\cos(x)"
            }
        ]
    },
    {
        id: 10,
        problem: "\\frac{\\frac{1}{a^2}-\\frac{1}{b^2}}{\\frac{1}{a}-\\frac{1}{b}}",
        whatYouSee: [
            "A complex fraction with fractions in both numerator and denominator",
            "The numerator involves subtraction of reciprocals of squares",
            "The denominator involves subtraction of reciprocals"
        ],
        keyInsights: [
            "Find common denominators for the expressions in the numerator and denominator",
            "Simplify the numerator and denominator separately",
            "Look for patterns that might lead to cancelation"
        ],
        formulasToApply: [
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Find a common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{b^2-a^2}{a^2b^2}}{\\frac{1}{a}-\\frac{1}{b}}"
            },
            {
                explanation: "Apply the difference of squares formula in the numerator",
                math: "\\frac{\\frac{(b-a)(b+a)}{a^2b^2}}{\\frac{1}{a}-\\frac{1}{b}}"
            },
            {
                explanation: "Find a common denominator for the fractions in the denominator",
                math: "\\frac{\\frac{(b-a)(b+a)}{a^2b^2}}{\\frac{b-a}{ab}}"
            },
            {
                explanation: "Convert the complex fraction to a simple fraction",
                math: "\\frac{(b-a)(b+a)}{a^2b^2} \\div \\frac{b-a}{ab}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{(b-a)(b+a)}{a^2b^2} \\times \\frac{ab}{b-a}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(b-a)}(b+a)}{a^2b^2} \\times \\frac{ab}{\\cancel{b-a}}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{(b+a)(ab)}{a^2b^2}"
            },
            {
                explanation: "Expand and simplify further",
                math: "\\frac{ab^2+a^2b}{a^2b^2}"
            },
            {
                explanation: "Factor out common terms",
                math: "\\frac{ab(b+a)}{a^2b^2}"
            },
            {
                explanation: "Simplify by canceling common factors",
                math: "\\frac{\\cancel{a}\\cancel{b}(b+a)}{a^2\\cancel{b}\\cancel{b}} = \\frac{b+a}{ab}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{a+b}{ab}"
            }
        ]
    }
];
