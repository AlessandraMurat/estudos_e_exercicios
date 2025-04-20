function multiplication() {
  var entry_number = window.document.getElementById("entry_number");
  var exit_number = document.getElementById("exit_number");
  var res_div = document.getElementById("result");

  if (entry_number.value.length == 0 || exit_number.value.length == 0) {
    res_div.innerHTML = ("(ERRO) Confira os dados!");
  } else {
    var entry_num = Number(entry_number.value);
    var exit_num = Number(exit_number.value);
    var x = 0;
    var result;
    res_div.innerHTML = `A tabuada de ${entry_num} é: <br>`;
    do {
      result = entry_num * x;
      res_div.innerHTML += `${entry_num} x ${x} = ${result} <br>`;
      x++;
    } while (x <= exit_num);
    //
  }
}
