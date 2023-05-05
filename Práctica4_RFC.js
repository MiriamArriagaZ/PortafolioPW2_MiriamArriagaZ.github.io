function solicitaRFC()
{
    var nom=document.getElementById("nombre").value;
    var nom2=nom.charAt(0);
    var Ap=document.getElementById("Ap").value;
    var Ap2=Ap.charAt(0);
    var Am=document.getElementById("Am").value;
    var Am2=Am.charAt(0);
    var An=document.getElementById("An").value;
    var An2=An.substring(2);
    var Mn=document.getElementById("Mn").value;
    var Dn=document.getElementById("Dn").value;
    var resultado=nom2.concat(Ap2, Am2, An2, Mn, Dn);
    document.getElementById("resul").value=resultado;
}