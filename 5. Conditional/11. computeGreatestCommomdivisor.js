'use strict'

// 11.  Write a javascript program to compute the greatest common divisor of two positive integers.

var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);