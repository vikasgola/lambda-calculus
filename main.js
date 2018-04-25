
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




// ==============================Combinators============================
//  are functions with no free variables
// example = a => b => a*b      combinator
// example2 = a => b            not a combinator

// free and bound variables
// exam = a => b => a*b*c
// here a and b is bound variable and c is free variable

// Identity:  a combinator
const I = a => a;
// takes an argument and returns that arguments 


// Mockingbird: a combinator
M = f => f(f);
// takes a function as argument and then appiles that function to itself
// e.g. M(I) = I because I(I) = I
// gives function applies to itself


// Kestrel:  a combinator
K = a => b => a;
//  takes an argument and calls another function which takes another argument and returns the first argument.
// e.g. K(5)(I) = 5
// always gives first argument


// Kite:  a combinator
// K(I)(x)(y);
KI = a => b => b;
//  takes an argument and calls another function which takes another argument and returns that argument.
// e.g. KI(I)(6) = 6
// always returns the second argument


// Cardinal: a combinator
C = f => a => b=> f(b)(a);
//  takes a function and two arguments and applies that arguments to function in opposite order.
// reverse the arguments


// Bluebird: a combinator
B = f => g => a => f(g(a));
// composition of functions

// Thrush: a combinator
TH = f => g => g(f);
// 


// Blackbird: a combinator
BB = f => g => a => b => f(g(a)(b));


// ================== Booleans in lambda calculus===================

// True and False
T = K;
T.inspect = () => 'true';
F = KI;
F.inspect = () => 'false';

// NOT
not = p => p(F)(T);
// also 
// not = p => C(p)(T)(F)  

// And 
and = a => b => a(b)(a);
// and = a => b => C(a)(a)(b)

// OR
or = a => b => a(a)(b);
// or = a => b => M(a)(b)

// XOR
xor = a => b => or(and(a)(b))(and(not(a))(not(b)));
// xor = a => b => a(b(T)(F))(b(F)(T))
// xor = a=> b => a(b)(not(b))


//  ================================= Numbers in lamba calculus ===================

// Church encoding: (Numerals)
zero = f => a => a;
once = f => a => f(a);
twice = f => a => f(f(a));
thrice = f => a => f(f(f(a)));
// The Peano Numbers
succ = n => f => a => f(n(f)(a));
// succ = n => f => B(f)(n(f));
num = n => n(x => x+1)(0);
// e.g. num(once) = 1, num(twice) = 2, num(succ(zero)) = 1


// ===================================Church arithmetic=============================
add = n => k => n(succ)(k);
mul = B;
pow = TH;
// pow = n => k => k(n)

iszero = n => n(K(F))(T);

// please check data structure before this
phi = p => V(snd(p))(succ(snd(p)));

//  predecessor
pred = n => fst(n(phi)(V(zero)(zero)));

// substraction
sub = n => k => k(pred)(n);

// less than or equal if minus one from another gives zero
leq = n => k => is0(sub(n)(k));

// equal if both are less than or equal to each other
eq = a => b => and(is0(sub(a)(b)))(is0(sub(b)(a)));

// greater than
geq = BB(not)(leq);


// ==================================== Data structures==============================

// Vireo
V = a => b => f => f(a)(b);
// first and second from Vireo
fst = p => p(K);
snd = p => p(KI);