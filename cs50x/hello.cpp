#include <iostream>

using namespace std;

int convert_binary_to_decimal(int);

int main()
{
    int binary, decimal;
    cout<<"Enter binary no: ";
    cin>>binary;

    decimal = convert_binary_to_decimal(binary);
    cout<<"Decimal equivalent of given binary number is: "<<decimal;

    return 0;
}

int convert_binary_to_decimal(int binary)
{
    int decimal = 0, remainder, weight = 1;

    while(binary != 0)
    {
        remainder = binary % 10;
        binary /= 10;
        decimal += remainder*weight;
        weight *= 2;
    }

    return decimal;
}