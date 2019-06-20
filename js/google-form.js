//Formulario a google
function postToGoogle() {
  var field1 = $("#nombres").val();
  var field2 = $("#correo").val();
  var field3 = $("#mensaje").val();

  if (field1 == "") {
    alert("Por favor ingrese su nombre");
    document.getElementById("nombres").focus();
    return false;
  }
  if (field2 == "") {
    alert("Por favor ingrese un correo correcto");
    document.getElementById("correo").focus();
    return false;
  }
  if (field3 == "" || field3.length < 10) {
    alert("El mensaje debe ser mayor a 10 caracteres");
    document.getElementById("mensaje").focus();
    return false;
  }

  $.ajax({
    url:
      "https://docs.google.com/forms/d/1wbk8QzdFh8z9PS0lzGs2_Ko1sNhgktOnxasrPExzjFo/formResponse?",
    data: {
      "entry.1154535975": field1,
      "entry.225231205": field2,
      "entry.559054470": field3
    },
    type: "POST",
    dataType: "xml",
    success: function(d) {},
    error: function(x, y, z) {
      $("#success-msg").show();
      $("#form").hide();
    }
  });
  return false;
}
