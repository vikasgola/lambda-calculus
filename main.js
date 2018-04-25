
//               L
//              L
//             L        ---     Calculus
//           L  L
//         L     L
//  abstraction and beta-reduction
//  fundamentals of lambda-calculus


// add in lambda calculus
add = a => b => a+b;
sub = a => b => a-b;
mul = a => b => a*b;
div = a => b => a/b;
// Example: add(5)(6)
//  mean that a = 5 and b = 6




// ================Combinators=============
//  are functions with no free variables
// example = a => b => a*b      combinator
// example2 = a => b            not a combinator

// ===================free and bound variables==================
// exam = a => b => a*b*c
// here a and b is bound variable and c is free variable

// Identity: ======================== a combinator
const I = a => a;
// takes an argument and returns that arguments 


// Mockingbird: ======================== a combinator
M = f => f(f);
// takes a function as argument and then appiles that function to itself
// e.g. M(I) = I because I(I) = I
// gives function applies to itself


// Kestrel: ======================== a combinator
K = a => b => a;
//  takes an argument and calls another function which takes another argument and returns the first argument.
// e.g. K(5)(I) = 5
// always gives first argument


// Kite: ======================== a combinator
// K(I)(x)(y);
KI = a => b => b;
//  takes an argument and calls another function which takes another argument and returns that argument.
// e.g. KI(I)(6) = 6
// always returns the second argument


// Cardinal:: ======================== a combinator
C = f => a => b=> f(b)(a);
//  takes a function and two arguments and applies that arguments to function in opposite order.
// reverse the arguments


