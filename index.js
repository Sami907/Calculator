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

function GetVal(Id)
{
    document.getElementById("txt1").value += document.getElementById(Id).innerText;
}