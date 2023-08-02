var oprsign = "";
var val = 0;
var secval = 0;
var result = 0;

function Run()
{
    secval = parseFloat(document.getElementById("txt1").value)
    document.getElementById("txt1").value = ""

    if(oprsign == "+")
    {
        result = val + secval;
    }
    else if(oprsign == "-")
    {
        result = val - secval;
    }
    else if(oprsign == "/")
    {
        result = val / secval;
    }
    else if(oprsign == "*")
    {
        result = val * secval;
    }

    document.getElementById("txt1").value = result
}

function GetSign(opr)
{
    oprsign = opr;
    val = parseFloat(document.getElementById("txt1").value);
    document.getElementById("txt1").value = "";
}

GetSign(document.getElementById("btnplus").innerText)
GetSign(document.getElementById("btnminus").innerText)
GetSign(document.getElementById("btndiv").innerText)
GetSign(document.getElementById("btnmtply").innerText)

Run();

function Clear()
{
    val = 0;
    secval = 0;
    oprsign = "";
    document.getElementById("txt1").value = ""
}

Clear();


function GetVal9()
{
    document.getElementById("txt1").value += document.getElementById("btn9").innerText
}

function GetVal8()
{
    document.getElementById("txt1").value += document.getElementById("btn8").innerText
}

function GetVal7()
{
    document.getElementById("txt1").value += document.getElementById("btn7").innerText
}

function GetVal6()
{
    document.getElementById("txt1").value += document.getElementById("btn6").innerText
}

function GetVal5()
{
    document.getElementById("txt1").value += document.getElementById("btn5").innerText
}

function GetVal4()
{
    document.getElementById("txt1").value += document.getElementById("btn4").innerText
}

function GetVal3()
{
    document.getElementById("txt1").value += document.getElementById("btn3").innerText
}

function GetVal2()
{
    document.getElementById("txt1").value += document.getElementById("btn2").innerText
}

function GetVal1()
{
    document.getElementById("txt1").value += document.getElementById("btn1").innerText
}

function GetVal0()
{
    document.getElementById("txt1").value += document.getElementById("btn0").innerText
}