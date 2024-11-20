using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using TMPro;
using UnityEngine;
using UnityEngine.TestTools;

public class CalculatorTestScript
{
    private Calculator _calculator;

    [SetUp]
    public void Setup()
    {
        // Create a new GameObject and add the Calculator component to it
        var gameObject = new GameObject();
        _calculator = gameObject.AddComponent<Calculator>();
        _calculator.displayText = new GameObject().AddComponent<TextMeshProUGUI>();
    }

    [Test]
    public void Add_TwoNumbers_ReturnsSum()
    {
        _calculator.OnButtonClick("5");
        _calculator.OnButtonClick("+");
        _calculator.OnButtonClick("3");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("8", _calculator.displayText.text);
    }

    [Test]
    public void Subtract_TwoNumbers_ReturnsDifference()
    {
        _calculator.OnButtonClick("9");
        _calculator.OnButtonClick("-");
        _calculator.OnButtonClick("4");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("5", _calculator.displayText.text);
    }

    [Test]
    public void Multiply_TwoNumbers_ReturnsProduct()
    {
        _calculator.OnButtonClick("7");
        _calculator.OnButtonClick("*");
        _calculator.OnButtonClick("6");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("42", _calculator.displayText.text);
    }

    [Test]
    public void Percentage_PercentageOfNumber_ReturnsProduct()
    {
        _calculator.OnButtonClick("10");
        _calculator.OnButtonClick("%");
        _calculator.OnButtonClick("200");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("20", _calculator.displayText.text);
    }

    [Test]
    public void Divide_TwoNumbers_ReturnsQuotient()
    {
        _calculator.OnButtonClick("8");
        _calculator.OnButtonClick("/");
        _calculator.OnButtonClick("2");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("4", _calculator.displayText.text);
    }

    [Test]
    public void Divide_TwoNumbers_DivByZero()
    {
        _calculator.OnButtonClick("8");
        _calculator.OnButtonClick("/");
        _calculator.OnButtonClick("0");
        _calculator.OnButtonClick("=");
        Assert.AreEqual("Cannot divide by zero", _calculator.displayText.text);
    }

    [Test]
    public void ClearInput_ResetsDisplay()
    {
        _calculator.OnButtonClick("9");
        _calculator.OnButtonClick("C");
        Assert.AreEqual("0", _calculator.displayText.text);
    }
}
