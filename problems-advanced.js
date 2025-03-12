// Advanced level algebraic fraction problems
const advancedProblems = [
    {
        id: 1,
        problem: "\\frac{\\frac{1}{x-1} - \\frac{1}{x+1}}{\\frac{1}{x^2-1}}",
        whatYouSee: [
            "A complex fraction with fractions in both numerator and denominator",
            "The numerator contains a difference of two fractions",
            "The denominator contains a single fraction with $x^2-1$ in its denominator"
        ],
        keyInsights: [
            "Recognize that $x^2-1 = (x+1)(x-1)$, a difference of squares",
            "Simplify the numerator by finding a common denominator",
            "To divide by a fraction, multiply by its reciprocal"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division by a fraction: $a \\div \\frac{b}{c} = a \\times \\frac{c}{b} = \\frac{ac}{b}$"
        ],
        steps: [
            {
                explanation: "Find a common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{x+1}{(x-1)(x+1)} - \\frac{x-1}{(x+1)(x-1)}}{\\frac{1}{x^2-1}}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{\\frac{(x+1) - (x-1)}{(x-1)(x+1)}}{\\frac{1}{x^2-1}}"
            },
            {
                explanation: "Expand the numerator of the top fraction",
                math: "\\frac{\\frac{x+1-x+1}{(x-1)(x+1)}}{\\frac{1}{x^2-1}}"
            },
            {
                explanation: "Combine like terms",
                math: "\\frac{\\frac{2}{(x-1)(x+1)}}{\\frac{1}{x^2-1}}"
            },
            {
                explanation: "Recognize that $(x-1)(x+1) = x^2-1$",
                math: "\\frac{\\frac{2}{x^2-1}}{\\frac{1}{x^2-1}}"
            },
            {
                explanation: "To divide by a fraction, multiply by its reciprocal",
                math: "\\frac{2}{x^2-1} \\times \\frac{x^2-1}{1}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{2 \\times \\cancel{(x^2-1)}}{\\cancel{(x^2-1)} \\times 1}"
            },
            {
                explanation: "Simplify to get the final result",
                math: "2"
            }
        ]
    },
    {
        id: 2,
        problem: "\\frac{x^2+3x+2}{x^2+x-2} \\div \\frac{x+2}{x-1}",
        whatYouSee: [
            "Division of two algebraic fractions",
            "Both numerator and denominator of the first fraction are quadratic expressions",
            "These expressions might be factorizable"
        ],
        keyInsights: [
            "Factor $x^2+3x+2 = (x+2)(x+1)$",
            "Factor $x^2+x-2 = (x+2)(x-1)$",
            "After factoring, look for common terms that can be canceled"
        ],
        formulasToApply: [
            "Factoring quadratics: $ax^2+bx+c = (px+q)(rx+s)$ where $pr=a$, $ps+qr=b$, and $qs=c$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor the numerator and denominator of the first fraction",
                math: "\\frac{(x+2)(x+1)}{(x+2)(x-1)} \\div \\frac{x+2}{x-1}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{(x+2)(x+1)}{(x+2)(x-1)} \\times \\frac{x-1}{x+2}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(x+2)}(x+1)}{\\cancel{(x+2)}(x-1)} \\times \\frac{x-1}{\\cancel{x+2}}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{x+1}{x-1} \\times \\frac{x-1}{1}"
            },
            {
                explanation: "Cancel more common factors",
                math: "\\frac{(x+1)\\cancel{(x-1)}}{\\cancel{(x-1)}} = x+1"
            },
            {
                explanation: "Write the final result",
                math: "x+1"
            }
        ]
    },
    {
        id: 3,
        problem: "\\frac{\\frac{x}{x^2-1} + \\frac{1}{x-1}}{\\frac{x+1}{x-1}}",
        whatYouSee: [
            "A complex fraction with addition in the numerator",
            "The denominators involve $x^2-1$ and $x-1$",
            "The expression $x^2-1$ can be factorized"
        ],
        keyInsights: [
            "Recognize that $x^2-1 = (x+1)(x-1)$",
            "Simplify the numerator by finding a common denominator",
            "To divide by a fraction, multiply by its reciprocal"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor $x^2-1$ in the first denominator",
                math: "\\frac{\\frac{x}{(x+1)(x-1)} + \\frac{1}{x-1}}{\\frac{x+1}{x-1}}"
            },
            {
                explanation: "Find common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{x}{(x+1)(x-1)} + \\frac{x+1}{(x+1)(x-1)}}{\\frac{x+1}{x-1}}"
            },
            {
                explanation: "Combine fractions in the numerator",
                math: "\\frac{\\frac{x + (x+1)}{(x+1)(x-1)}}{\\frac{x+1}{x-1}}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{\\frac{2x+1}{(x+1)(x-1)}}{\\frac{x+1}{x-1}}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{2x+1}{(x+1)(x-1)} \\times \\frac{x-1}{x+1}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{2x+1}{(x+1)\\cancel{(x-1)}} \\times \\frac{\\cancel{(x-1)}}{x+1}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{2x+1}{(x+1)^2}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{2x+1}{(x+1)^2}"
            }
        ]
    },
    {
        id: 4,
        problem: "\\frac{\\frac{1}{a} - \\frac{1}{b}}{\\frac{1}{a^2} - \\frac{1}{b^2}}",
        whatYouSee: [
            "A complex fraction with subtraction in both numerator and denominator",
            "Variables $a$ and $b$ appear in the denominators",
            "We need to simplify systematically"
        ],
        keyInsights: [
            "Simplify the numerator by finding a common denominator",
            "Simplify the denominator using the fact that $\\frac{1}{a^2} - \\frac{1}{b^2} = \\frac{b^2-a^2}{a^2b^2}$",
            "Use the difference of squares identity: $b^2-a^2 = (b+a)(b-a)$"
        ],
        formulasToApply: [
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Find a common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{b-a}{ab}}{\\frac{1}{a^2} - \\frac{1}{b^2}}"
            },
            {
                explanation: "Find a common denominator for the fractions in the denominator",
                math: "\\frac{\\frac{b-a}{ab}}{\\frac{b^2-a^2}{a^2b^2}}"
            },
            {
                explanation: "Use the difference of squares formula in the denominator",
                math: "\\frac{\\frac{b-a}{ab}}{\\frac{(b+a)(b-a)}{a^2b^2}}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{b-a}{ab} \\times \\frac{a^2b^2}{(b+a)(b-a)}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(b-a)}}{ab} \\times \\frac{a^2b^2}{(b+a)\\cancel{(b-a)}}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{1}{ab} \\times \\frac{a^2b^2}{(b+a)} = \\frac{ab}{b+a}"
            },
            {
                explanation: "Factor out $a$ in the numerator",
                math: "\\frac{a \\cdot b}{a + b}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{ab}{a+b}"
            }
        ]
    },
    {
        id: 5,
        problem: "\\frac{x^2+5x+6}{x^2+3x+2} \\div \\frac{x+3}{x+1}",
        whatYouSee: [
            "Division of two algebraic fractions",
            "Quadratic expressions in the numerator and denominator",
            "These expressions can be factorized to identify common factors"
        ],
        keyInsights: [
            "Factor $x^2+5x+6 = (x+2)(x+3)$",
            "Factor $x^2+3x+2 = (x+1)(x+2)$",
            "To divide by a fraction, multiply by the reciprocal and simplify"
        ],
        formulasToApply: [
            "Factoring quadratics: $ax^2+bx+c = (px+q)(rx+s)$ where $pr=a$, $ps+qr=b$, and $qs=c$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor the numerator and denominator of the first fraction",
                math: "\\frac{(x+2)(x+3)}{(x+1)(x+2)} \\div \\frac{x+3}{x+1}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{(x+2)(x+3)}{(x+1)(x+2)} \\times \\frac{x+1}{x+3}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(x+2)}\\cancel{(x+3)}}{\\cancel{(x+1)}\\cancel{(x+2)}} \\times \\frac{\\cancel{(x+1)}}{\\cancel{(x+3)}}"
            },
            {
                explanation: "Simplify to get the final result",
                math: "1"
            }
        ]
    },
    {
        id: 6,
        problem: "\\frac{(x-1)^2-9}{x^2-2x-3} \\times \\frac{x+2}{x-4}",
        whatYouSee: [
            "Multiplication of two algebraic fractions",
            "The first numerator contains a difference of squares with a binomial term",
            "The denominators might be factorizable"
        ],
        keyInsights: [
            "Expand $(x-1)^2-9 = (x-1)^2-3^2$ and factor as a difference of squares",
            "Factor $x^2-2x-3 = (x+1)(x-3)$",
            "Look for common factors that can be canceled"
        ],
        formulasToApply: [
            "Expanding a binomial squared: $(a-b)^2 = a^2-2ab+b^2$",
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Factoring quadratics: $ax^2+bx+c = (px+q)(rx+s)$ where $pr=a$, $ps+qr=b$, and $qs=c$"
        ],
        steps: [
            {
                explanation: "Expand the first numerator",
                math: "\\frac{(x^2-2x+1)-9}{x^2-2x-3} \\times \\frac{x+2}{x-4}"
            },
            {
                explanation: "Simplify the first numerator",
                math: "\\frac{x^2-2x+1-9}{x^2-2x-3} \\times \\frac{x+2}{x-4} = \\frac{x^2-2x-8}{x^2-2x-3} \\times \\frac{x+2}{x-4}"
            },
            {
                explanation: "Factor the numerator and denominator of the first fraction",
                math: "\\frac{(x-4)(x+2)}{(x+1)(x-3)} \\times \\frac{x+2}{x-4}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{(x-4)}\\cancel{(x+2)}}{(x+1)(x-3)} \\times \\frac{\\cancel{(x+2)}}{\\cancel{(x-4)}}"
            },
            {
                explanation: "Simplify to get the final result",
                math: "\\frac{1}{(x+1)(x-3)}"
            }
        ]
    },
    {
        id: 7,
        problem: "\\frac{(x+h)^2-x^2}{h}",
        whatYouSee: [
            "A fraction with a difference of squares in the numerator",
            "The variable $h$ appears in both numerator and denominator",
            "This is the difference quotient for the function $f(x) = x^2$, which approximates the derivative"
        ],
        keyInsights: [
            "Expand $(x+h)^2 = x^2 + 2xh + h^2$",
            "Simplify the numerator: $(x+h)^2-x^2 = 2xh + h^2$",
            "Factor out $h$ from the numerator to cancel with the denominator"
        ],
        formulasToApply: [
            "Expanding a binomial squared: $(a+b)^2 = a^2+2ab+b^2$",
            "Factoring out common terms: $ab + ac = a(b + c)$"
        ],
        steps: [
            {
                explanation: "Expand the squared term in the numerator",
                math: "\\frac{(x^2 + 2xh + h^2) - x^2}{h}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h}"
            },
            {
                explanation: "Factor out $h$ from the numerator",
                math: "\\frac{h(2x + h)}{h}"
            },
            {
                explanation: "Cancel the common factor $h$",
                math: "\\frac{\\cancel{h}(2x + h)}{\\cancel{h}} = 2x + h"
            },
            {
                explanation: "Write the final result",
                math: "2x + h"
            }
        ]
    },
    {
        id: 8,
        problem: "\\frac{1}{\\frac{1}{x} + \\frac{1}{y}} \\times \\frac{x+y}{xy}",
        whatYouSee: [
            "A complex fraction multiplied by another fraction",
            "The complex fraction has a sum of fractions in its denominator",
            "This looks like it could be related to the formula for parallel resistors"
        ],
        keyInsights: [
            "Simplify the complex fraction first by finding the LCD of $\\frac{1}{x} + \\frac{1}{y}$",
            "Then multiply by the second fraction",
            "Look for patterns that might lead to a simple final result"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Reciprocal of a fraction: $\\frac{1}{\\frac{a}{b}} = \\frac{b}{a}$",
            "Multiplication of fractions: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$"
        ],
        steps: [
            {
                explanation: "Find the common denominator for the fractions in the denominator of the complex fraction",
                math: "\\frac{1}{\\frac{y+x}{xy}} \\times \\frac{x+y}{xy}"
            },
            {
                explanation: "Take the reciprocal of the denominator to simplify the complex fraction",
                math: "\\frac{xy}{y+x} \\times \\frac{x+y}{xy}"
            },
            {
                explanation: "Multiply the fractions",
                math: "\\frac{xy}{y+x} \\times \\frac{x+y}{xy}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{\\cancel{xy}}{\\cancel{y+x}} \\times \\frac{\\cancel{x+y}}{\\cancel{xy}}"
            },
            {
                explanation: "Simplify to get the final result",
                math: "1"
            }
        ]
    },
    {
        id: 9,
        problem: "\\frac{\\frac{1}{x-y} - \\frac{1}{y-z}}{\\frac{1}{z-x}}",
        whatYouSee: [
            "A complex fraction with subtraction in the numerator",
            "Three variables $x$, $y$, and $z$ appear in the denominators",
            "The pattern of denominators suggests a potential for simplification"
        ],
        keyInsights: [
            "Find a common denominator for $\\frac{1}{x-y}$ and $\\frac{1}{y-z}$",
            "Note that $\\frac{1}{y-z} = -\\frac{1}{z-y}$",
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
                math: "\\left(\\frac{1}{x-y} - \\frac{1}{y-z}\\right) \\div \\frac{1}{z-x}"
            },
            {
                explanation: "Rewrite $\\frac{1}{y-z}$ with a negative sign",
                math: "\\left(\\frac{1}{x-y} + \\frac{1}{z-y}\\right) \\div \\frac{1}{z-x}"
            },
            {
                explanation: "Find a common denominator for the fractions in parentheses",
                math: "\\left(\\frac{(z-y)+(x-y)}{(x-y)(z-y)}\\right) \\div \\frac{1}{z-x}"
            },
            {
                explanation: "Simplify the numerator in the parentheses",
                math: "\\left(\\frac{z-y+x-y}{(x-y)(z-y)}\\right) \\div \\frac{1}{z-x}"
            },
            {
                explanation: "Combine like terms",
                math: "\\left(\\frac{x+z-2y}{(x-y)(z-y)}\\right) \\div \\frac{1}{z-x}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{x+z-2y}{(x-y)(z-y)} \\times \\frac{z-x}{1}"
            },
            {
                explanation: "Multiply the fractions",
                math: "\\frac{(x+z-2y)(z-x)}{(x-y)(z-y)}"
            },
            {
                explanation: "Expand the numerator",
                math: "\\frac{(x+z-2y)(z-x)}{(x-y)(z-y)} = \\frac{xz-x^2+z^2-xz-2yz+2xy}{(x-y)(z-y)}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{-x^2+z^2+2xy-2yz}{(x-y)(z-y)} = \\frac{z^2-x^2+2(xy-yz)}{(x-y)(z-y)}"
            },
            {
                explanation: "Use the difference of squares formula: $z^2-x^2 = (z+x)(z-x)$",
                math: "\\frac{(z+x)(z-x)+2(xy-yz)}{(x-y)(z-y)}"
            },
            {
                explanation: "Rearrange and factor further if possible",
                math: "\\frac{(z+x)(z-x)+2y(x-z)}{(x-y)(z-y)}"
            },
            {
                explanation: "Recognize that $(z-x) = -(x-z)$ and simplify",
                math: "\\frac{-(z+x)(x-z)-2y(x-z)}{(x-y)(z-y)} = \\frac{-(x-z)(z+x+2y)}{(x-y)(z-y)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{-(x-z)(z+x+2y)}{(x-y)(z-y)}"
            }
        ]
    },
    {
        id: 10,
        problem: "\\frac{(x+h)^3-x^3}{h}",
        whatYouSee: [
            "A fraction with a difference of cubes in the numerator",
            "The variable $h$ appears in both numerator and denominator",
            "This is the difference quotient for the function $f(x) = x^3$"
        ],
        keyInsights: [
            "Expand $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$",
            "Simplify the numerator: $(x+h)^3-x^3 = 3x^2h + 3xh^2 + h^3$",
            "Factor out $h$ from the numerator to cancel with the denominator"
        ],
        formulasToApply: [
            "Expanding a binomial cubed: $(a+b)^3 = a^3+3a^2b+3ab^2+b^3$",
            "Factoring out common terms: $ab + ac + ad = a(b + c + d)$"
        ],
        steps: [
            {
                explanation: "Expand the cubed term in the numerator",
                math: "\\frac{(x^3 + 3x^2h + 3xh^2 + h^3) - x^3}{h}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h} = \\frac{3x^2h + 3xh^2 + h^3}{h}"
            },
            {
                explanation: "Factor out $h$ from the numerator",
                math: "\\frac{h(3x^2 + 3xh + h^2)}{h}"
            },
            {
                explanation: "Cancel the common factor $h$",
                math: "\\frac{\\cancel{h}(3x^2 + 3xh + h^2)}{\\cancel{h}} = 3x^2 + 3xh + h^2"
            },
            {
                explanation: "Write the final result",
                math: "3x^2 + 3xh + h^2"
            }
        ]
    }
];
