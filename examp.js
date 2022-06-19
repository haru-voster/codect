< html >
    <
    body >
    <
    script type = "text/javascript" >
    <!--
    var a = 10;
var b = 20;
var linebreak = "<br />";
document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);
Javascript
25
document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);
document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);
document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);
document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);
document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);
//-->
<
/script> <
p > Set the variables to different values and different operators and
then
try... < /p> < /
body > <
    /html>
Javascript
26
Output
    (a == b) => false(a < b) => true(a > b) => false(a != b) => true(a >= b) => false(a <= b) => true
Set the variables to different values and different operators and then
try...
Logical Operators
JavaScript supports the following logical operators:
    Assume variable A holds 10 and variable B holds 20, then:
    S.No Operator and Description
1
    &&
    (Logical AND)
If both the operands are non - zero, then the condition becomes true.
Ex: (A && B) is true.
2
    ||
    (Logical OR)
If any of the two operands are non - zero, then the condition becomes
true.
Ex: (A || B) is true.
3
    !(Logical NOT)
Reverses the logical state of its operand.If a condition is true, then the
Logical NOT operator will make it false.
Ex: !(A && B) is false.
Example
Javascript
27
Try the following code to learn how to implement Logical Operators in
    JavaScript. <
    html >
    <
    body >
    <
    script type = "text/javascript" >
    <!--
    var a = true;
var b = false;
var linebreak = "<br />";
document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);
document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);
document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);
//-->
<
/script> <
p > Set the variables to different values and different operators and
then
try... < /p>