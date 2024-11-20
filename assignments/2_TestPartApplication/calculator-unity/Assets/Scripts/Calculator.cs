using TMPro;
using UnityEngine;


public class Calculator : MonoBehaviour
{

    public TextMeshProUGUI displayText;

    private string input = "";
    private string operand1 = "";
    private string operand2 = "";
    private string operation;
    private float result;

    // Clear all input
    private void ClearInput()
    {
        input = "";
        operand1 = "";
        operand2 = "";
        operation = null;
    }

    public void OnButtonClick(string buttonValue)
    {
        // Cancel calcluation and start over        
        if (buttonValue == "C")
        {
            this.ClearInput();
            displayText.text = "0";
            return;
        }

        // Calculate the result
        if (buttonValue == "=")
        {
            if (operation == "+")
                result = float.Parse(operand1) + float.Parse(operand2);
            else if (operation == "-")
                result = float.Parse(operand1) - float.Parse(operand2);
            else if (operation == "*")
                result = float.Parse(operand1) * float.Parse(operand2);
            else if (operation == "/")
                result = float.Parse(operand1) / float.Parse(operand2);
            else return;

            // Display the result
            displayText.text = result.ToString();
            // Start over
            this.ClearInput();
            // But keep the result for further calculations
            operand1 = input = result.ToString();
            return;
        }

        // It is an operation 
        if ("+-*/".Contains(buttonValue))
        {
            // Exit if we've got an operation already
            if (operation != null) return;
            operation = buttonValue;
        }
        // It is a number
        else
        {
            // Save the operand (1 or 2)
            if (operation == null)
            {
                operand1 += buttonValue;
            }
            else
            {
                if (buttonValue == "0")
                {
                    this.ClearInput();
                    return;
                }
                operand2 += buttonValue;
            }
        }

        // Update the display
        input += buttonValue;
        displayText.text = input;
    }
}
