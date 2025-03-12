// Intermediate level algebraic fraction problems
const intermediateProblems = [
    {
        id: 1,
        problem: "\\frac{x^2+x-2}{x-1} - \\frac{x+3}{1}",
        whatYouSee: [
            "An algebraic fraction subtracted from a polynomial expression",
            "The numerator of the first fraction ($x^2+x-2$) might be factorizable",
            "The second term has a denominator of 1, making it a whole expression"
        ],
        keyInsights: [
            "Look for potential factorization in the numerator: $x^2+x-2 = (x+2)(x-1)$",
            "Notice that $(x-1)$ appears in both the numerator and denominator of the first fraction",
            "After simplifying, this becomes a direct subtraction problem"
        ],
        formulasToApply: [
            "Factoring quadratics: $ax^2+bx+c = (px+q)(rx+s)$ where $pr=a$, $ps+qr=b$, and $qs=c$",
            "Simplifying fractions: $\\frac{(x+a)(x+b)}{(x+b)} = \\frac{x+a}{1} = x+a$, when $x+b \\neq 0$"
        ],
        steps: [
            {
                explanation: "Factor the numerator of the first fraction",
                math: "\\frac{(x+2)(x-1)}{x-1} - (x+3)"
            },
            {
                explanation: "Simplify the first fraction by canceling the common factor $(x-1)$",
                math: "\\frac{(x+2)(\\cancel{x-1})}{\\cancel{x-1}} - (x+3) = (x+2) - (x+3)"
            },
            {
                explanation: "Subtract the expressions",
                math: "x+2 - x - 3"
            },
            {
                explanation: "Combine like terms",
                math: "x - x + 2 - 3"
            },
            {
                explanation: "Simplify to get the final result",
                math: "-1"
            }
        ]
    },
    {
        id: 2,
        problem: "\\frac{x^2-1}{x^2+x-2} \\div \\frac{x+1}{x-1}",
        whatYouSee: [
            "Division of two algebraic fractions",
            "The numerator $x^2-1$ and denominator $x^2+x-2$ of the first fraction might be factorizable",
            "The second fraction has different numerator and denominator"
        ],
        keyInsights: [
            "Recognize that $x^2-1$ is a difference of squares: $(x+1)(x-1)$",
            "Factor the denominator of the first fraction: $x^2+x-2 = (x+2)(x-1)$",
            "To divide by a fraction, multiply by its reciprocal"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor the numerator and denominator of the first fraction",
                math: "\\frac{(x+1)(x-1)}{(x+2)(x-1)} \\div \\frac{x+1}{x-1}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "\\frac{(x+1)(x-1)}{(x+2)(x-1)} \\times \\frac{x-1}{x+1}"
            },
            {
                explanation: "Cancel common factors in the numerator and denominator",
                math: "\\frac{\\cancel{(x+1)}(x-1)}{(x+2)\\cancel{(x-1)}} \\times \\frac{\\cancel{(x-1)}}{\\cancel{(x+1)}}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{1}{x+2}"
            }
        ]
    },
    {
        id: 3,
        problem: "\\frac{x^2-9}{x^2+6x+9} - \\frac{x-3}{x+3} \\times \\frac{3}{x+3}",
        whatYouSee: [
            "Subtraction combined with multiplication of fractions",
            "Multiple terms that might be factorizable",
            "We need to apply order of operations (multiplication before subtraction)"
        ],
        keyInsights: [
            "First simplify the multiplication of fractions on the right",
            "Recognize patterns: $x^2-9 = (x+3)(x-3)$ and $x^2+6x+9 = (x+3)^2$",
            "Factor everything before performing operations"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Perfect square trinomial: $a^2+2ab+b^2 = (a+b)^2$",
            "Multiplication of fractions: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$"
        ],
        steps: [
            {
                explanation: "Factor the expressions in the first fraction",
                math: "\\frac{(x+3)(x-3)}{(x+3)^2} - \\frac{x-3}{x+3} \\times \\frac{3}{x+3}"
            },
            {
                explanation: "Perform the multiplication on the right",
                math: "\\frac{(x+3)(x-3)}{(x+3)^2} - \\frac{(x-3) \\times 3}{(x+3) \\times (x+3)}"
            },
            {
                explanation: "Simplify the multiplication",
                math: "\\frac{(x+3)(x-3)}{(x+3)^2} - \\frac{3(x-3)}{(x+3)^2}"
            },
            {
                explanation: "Rewrite with common denominator",
                math: "\\frac{(x+3)(x-3) - 3(x-3)}{(x+3)^2}"
            },
            {
                explanation: "Factor out (x-3) from the numerator",
                math: "\\frac{(x-3)[(x+3) - 3]}{(x+3)^2}"
            },
            {
                explanation: "Simplify the expression inside brackets",
                math: "\\frac{(x-3)(x)}{(x+3)^2}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x(x-3)}{(x+3)^2}"
            }
        ]
    },
    {
        id: 4,
        problem: "\\frac{\\frac{2}{x} - \\frac{1}{y}}{\\frac{1}{x} + \\frac{1}{y}}",
        whatYouSee: [
            "A complex fraction with operations in both numerator and denominator",
            "The numerator contains a subtraction of fractions",
            "The denominator contains an addition of fractions"
        ],
        keyInsights: [
            "For complex fractions, simplify the numerator and denominator separately first",
            "Find common denominators for the expressions in numerator and denominator",
            "Then divide the simplified numerator by the simplified denominator"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division of fractions: $\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\div \\frac{c}{d} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Simplify the numerator by finding a common denominator",
                math: "\\frac{2}{x} - \\frac{1}{y} = \\frac{2y - x}{xy}"
            },
            {
                explanation: "Simplify the denominator by finding a common denominator",
                math: "\\frac{1}{x} + \\frac{1}{y} = \\frac{y + x}{xy}"
            },
            {
                explanation: "Rewrite the complex fraction with simplified parts",
                math: "\\frac{\\frac{2y - x}{xy}}{\\frac{y + x}{xy}}"
            },
            {
                explanation: "To divide fractions, multiply by the reciprocal",
                math: "\\frac{2y - x}{xy} \\times \\frac{xy}{y + x}"
            },
            {
                explanation: "Cancel common factors",
                math: "\\frac{2y - x}{\\cancel{xy}} \\times \\frac{\\cancel{xy}}{y + x}"
            },
            {
                explanation: "Simplify",
                math: "\\frac{2y - x}{y + x}"
            }
        ]
    },
    {
        id: 5,
        problem: "\\frac{2x+1}{x^2-1} + \\frac{x}{x-1} - \\frac{x+3}{x+1}",
        whatYouSee: [
            "Three algebraic fractions with different denominators",
            "The denominator $x^2-1$ is a difference of squares",
            "Need to find a common denominator for all three fractions"
        ],
        keyInsights: [
            "Factor $x^2-1 = (x+1)(x-1)$",
            "Notice that the other two denominators are factors of the first",
            "We can use $(x+1)(x-1)$ as the least common denominator"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Addition/subtraction with different denominators: Convert to LCD then add/subtract numerators"
        ],
        steps: [
            {
                explanation: "Factor the first denominator",
                math: "\\frac{2x+1}{(x+1)(x-1)} + \\frac{x}{x-1} - \\frac{x+3}{x+1}"
            },
            {
                explanation: "Convert all fractions to have the LCD = $(x+1)(x-1)$",
                math: "\\frac{2x+1}{(x+1)(x-1)} + \\frac{x(x+1)}{(x-1)(x+1)} - \\frac{(x+3)(x-1)}{(x+1)(x-1)}"
            },
            {
                explanation: "Simplify the numerators",
                math: "\\frac{2x+1}{(x+1)(x-1)} + \\frac{x(x+1)}{(x-1)(x+1)} - \\frac{(x+3)(x-1)}{(x+1)(x-1)}"
            },
            {
                explanation: "Expand the numerators",
                math: "\\frac{2x+1}{(x+1)(x-1)} + \\frac{x^2+x}{(x-1)(x+1)} - \\frac{x^2+3x-x-3}{(x+1)(x-1)}"
            },
            {
                explanation: "Simplify further",
                math: "\\frac{2x+1}{(x+1)(x-1)} + \\frac{x^2+x}{(x-1)(x+1)} - \\frac{x^2+2x-3}{(x+1)(x-1)}"
            },
            {
                explanation: "Combine the numerators with the common denominator",
                math: "\\frac{(2x+1) + (x^2+x) - (x^2+2x-3)}{(x+1)(x-1)}"
            },
            {
                explanation: "Expand and collect like terms",
                math: "\\frac{2x+1+x^2+x-x^2-2x+3}{(x+1)(x-1)}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{2x+1+x-2x+3}{(x+1)(x-1)} = \\frac{x+4}{(x+1)(x-1)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x+4}{x^2-1}"
            }
        ]
    },
    {
        id: 6,
        problem: "\\frac{x^3+1}{x^2-x+1} \\div \\frac{x^2+x+1}{x-1}",
        whatYouSee: [
            "Division of two algebraic fractions with polynomial expressions",
            "The denominators don't appear to have obvious common factors",
            "The numerator $x^3+1$ can be factored as a sum of cubes"
        ],
        keyInsights: [
            "Recognize that $x^3+1 = (x+1)(x^2-x+1)$",
            "Also note that $x^2+x+1 = (x^3+1)/(x+1)$",
            "To divide fractions, multiply by the reciprocal and simplify"
        ],
        formulasToApply: [
            "Sum of cubes: $a^3+b^3 = (a+b)(a^2-ab+b^2)$",
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$"
        ],
        steps: [
            {
                explanation: "Factor the numerator of the first fraction",
                math: "\\frac{(x+1)(x^2-x+1)}{x^2-x+1} \\div \\frac{x^2+x+1}{x-1}"
            },
            {
                explanation: "Simplify the first fraction",
                math: "\\frac{x+1}{1} \\div \\frac{x^2+x+1}{x-1}"
            },
            {
                explanation: "Convert division to multiplication by the reciprocal",
                math: "(x+1) \\times \\frac{x-1}{x^2+x+1}"
            },
            {
                explanation: "Distribute multiplication",
                math: "\\frac{(x+1)(x-1)}{x^2+x+1}"
            },
            {
                explanation: "Simplify the numerator using the difference of squares formula",
                math: "\\frac{x^2-1}{x^2+x+1}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x^2-1}{x^2+x+1}"
            }
        ]
    },
    {
        id: 7,
        problem: "\\frac{1}{x-2} + \\frac{1}{x-3} - \\frac{5}{(x-2)(x-3)}",
        whatYouSee: [
            "Three fractions with different denominators",
            "Two simpler denominators and one that is the product of the others",
            "Need to find the least common denominator (LCD)"
        ],
        keyInsights: [
            "The LCD is clearly $(x-2)(x-3)$, which is already the denominator of the third fraction",
            "Convert the first two fractions to have the LCD as denominator",
            "Then add/subtract with the common denominator"
        ],
        formulasToApply: [
            "Addition with different denominators: $\\frac{a}{c} + \\frac{b}{d} = \\frac{ad + bc}{cd}$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = (x-2)(x-3)"
            },
            {
                explanation: "Convert the first fraction to have the LCD as denominator",
                math: "\\frac{1}{x-2} = \\frac{1(x-3)}{(x-2)(x-3)} = \\frac{x-3}{(x-2)(x-3)}"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{1}{x-3} = \\frac{1(x-2)}{(x-3)(x-2)} = \\frac{x-2}{(x-2)(x-3)}"
            },
            {
                explanation: "Rewrite the expression with common denominators",
                math: "\\frac{x-3}{(x-2)(x-3)} + \\frac{x-2}{(x-2)(x-3)} - \\frac{5}{(x-2)(x-3)}"
            },
            {
                explanation: "Combine the numerators",
                math: "\\frac{(x-3) + (x-2) - 5}{(x-2)(x-3)}"
            },
            {
                explanation: "Expand and simplify the numerator",
                math: "\\frac{x-3+x-2-5}{(x-2)(x-3)} = \\frac{2x-10}{(x-2)(x-3)}"
            },
            {
                explanation: "Factor out common terms in the numerator if possible",
                math: "\\frac{2(x-5)}{(x-2)(x-3)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{2(x-5)}{(x-2)(x-3)}"
            }
        ]
    },
    {
        id: 8,
        problem: "\\frac{x^2}{x^2-4} - \\frac{1}{x-2}",
        whatYouSee: [
            "Two algebraic fractions with different denominators",
            "The first denominator $x^2-4$ is a difference of squares",
            "The second denominator $x-2$ might be a factor of the first"
        ],
        keyInsights: [
            "Factor $x^2-4 = (x+2)(x-2)$",
            "Notice that $x-2$ is a factor of the first denominator",
            "We need to find a common denominator to subtract these fractions"
        ],
        formulasToApply: [
            "Difference of squares: $a^2-b^2 = (a+b)(a-b)$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Factor the first denominator",
                math: "\\frac{x^2}{(x+2)(x-2)} - \\frac{1}{x-2}"
            },
            {
                explanation: "Identify the least common denominator (LCD)",
                math: "\\text{LCD} = (x+2)(x-2)"
            },
            {
                explanation: "Convert the second fraction to have the LCD as denominator",
                math: "\\frac{1}{x-2} = \\frac{1(x+2)}{(x-2)(x+2)} = \\frac{x+2}{(x+2)(x-2)}"
            },
            {
                explanation: "Rewrite with common denominators",
                math: "\\frac{x^2}{(x+2)(x-2)} - \\frac{x+2}{(x+2)(x-2)}"
            },
            {
                explanation: "Combine the numerators",
                math: "\\frac{x^2 - (x+2)}{(x+2)(x-2)}"
            },
            {
                explanation: "Expand and simplify the numerator",
                math: "\\frac{x^2 - x - 2}{(x+2)(x-2)}"
            },
            {
                explanation: "Factor the numerator if possible",
                math: "\\frac{x(x-1) - 2}{(x+2)(x-2)}"
            },
            {
                explanation: "Write the final result",
                math: "\\frac{x^2 - x - 2}{(x+2)(x-2)}"
            }
        ]
    },
    {
        id: 9,
        problem: "\\frac{x}{x+h} - \\frac{x}{x} \\div \\frac{h}{x}",
        whatYouSee: [
            "A mix of arithmetic operations involving fractions",
            "The first term is a simple fraction",
            "The second part involves division of fractions"
        ],
        keyInsights: [
            "Handle the division operation first: $\\frac{x}{x} \\div \\frac{h}{x} = \\frac{x}{x} \\times \\frac{x}{h} = \\frac{x^2}{xh} = \\frac{x}{h}$",
            "Then proceed with the subtraction, finding a common denominator",
            "This problem is related to the difference quotient in calculus"
        ],
        formulasToApply: [
            "Division of fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$",
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$"
        ],
        steps: [
            {
                explanation: "Simplify the first fraction",
                math: "\\frac{x}{x+h}"
            },
            {
                explanation: "Handle the division in the second term",
                math: "\\frac{x}{x} \\div \\frac{h}{x} = \\frac{x}{x} \\times \\frac{x}{h} = \\frac{x^2}{xh} = \\frac{x}{h}"
            },
            {
                explanation: "Rewrite the entire expression",
                math: "\\frac{x}{x+h} - \\frac{x}{h}"
            },
            {
                explanation: "Find the least common denominator (LCD)",
                math: "\\text{LCD} = h(x+h)"
            },
            {
                explanation: "Convert the first fraction to have the LCD",
                math: "\\frac{x}{x+h} = \\frac{xh}{(x+h)h} = \\frac{xh}{h(x+h)}"
            },
            {
                explanation: "Convert the second fraction to have the LCD",
                math: "\\frac{x}{h} = \\frac{x(x+h)}{h(x+h)}"
            },
            {
                explanation: "Rewrite with common denominator",
                math: "\\frac{xh - x(x+h)}{h(x+h)}"
            },
            {
                explanation: "Expand the numerator",
                math: "\\frac{xh - x^2 - xh}{h(x+h)}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{-x^2}{h(x+h)}"
            },
            {
                explanation: "Factor out the negative sign",
                math: "\\frac{-x^2}{h(x+h)} = -\\frac{x^2}{h(x+h)}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{x^2}{h(x+h)}"
            }
        ]
    },
    {
        id: 10,
        problem: "\\frac{\\frac{1}{a+h} - \\frac{1}{a}}{h}",
        whatYouSee: [
            "A complex fraction with a difference of fractions in the numerator",
            "The variable $h$ appears in both the numerator and denominator",
            "This is the difference quotient for the function $f(x) = \\frac{1}{x}$"
        ],
        keyInsights: [
            "Find a common denominator for the fractions in the numerator",
            "Simplify the numerator first, then divide by $h$",
            "Look for opportunities to cancel terms containing $h$"
        ],
        formulasToApply: [
            "Subtraction with different denominators: $\\frac{a}{c} - \\frac{b}{d} = \\frac{ad - bc}{cd}$",
            "Division by a number: $\\frac{a}{b} \\div c = \\frac{a}{bc}$"
        ],
        steps: [
            {
                explanation: "Find a common denominator for the fractions in the numerator",
                math: "\\frac{\\frac{1}{a+h} - \\frac{1}{a}}{h} = \\frac{\\frac{a}{a(a+h)} - \\frac{a+h}{a(a+h)}}{h}"
            },
            {
                explanation: "Combine fractions in the numerator",
                math: "\\frac{\\frac{a - (a+h)}{a(a+h)}}{h}"
            },
            {
                explanation: "Simplify the numerator",
                math: "\\frac{\\frac{a - a - h}{a(a+h)}}{h} = \\frac{\\frac{-h}{a(a+h)}}{h}"
            },
            {
                explanation: "Rewrite as division",
                math: "\\frac{-h}{a(a+h)} \\div h"
            },
            {
                explanation: "Divide by $h$",
                math: "\\frac{-h}{a(a+h) \\cdot h} = \\frac{-1}{a(a+h)}"
            },
            {
                explanation: "Write the final result",
                math: "-\\frac{1}{a(a+h)}"
            }
        ]
    }
];
