
/*function getValuesStatic(ele){
  const costElement = $(ele).children(".cost");
    const quantityInput = $(ele).find(".quantity input");

    let cost, quantity;
    try {
      cost = parseFloat(costElement.text());
      quantity = parseFloat(quantityInput.val() || 0); 
    } catch (error) {
      console.error("Error parsing cost or quantity:", error);
      return; 
    }
  
    let total = cost * quantity;
    $(ele).children(".total").text(`$${total}`);
    return total;
}*/

function getStaticValues(element) {
    const costElement = $(element).children(".cost");
    const quantityInput = $(element).find(".quantity input");
  
    const cost = parseFloat(costElement.text() || 0);
    const quantity = parseFloat(quantityInput.val() || 0);
  
    return { cost, quantity };
  }
  

  function getDynamicValues(costElement, quantityInput) {
    const cost = parseFloat(costElement.val() || 0);
    const quantity = parseFloat(quantityInput.val() || 0);
  
    return { cost, quantity };
  }
  
  
  function getValuesStatic(ele) {
    
    const isStaticRow = $(ele).hasClass("static-row"); 
  
    if (isStaticRow) {
      return getStaticValues(ele);
    } else {
     
      const costElement = $(ele).children(".cost").find("input"); 
      const quantityInput = $(ele).find(".quantity input");
      return getDynamicValues(costElement, quantityInput);
    }
  }
  
  function getTotals() {
    let total = 0; 
    $("tbody tr").each(function (i, ele) {
      const { cost, quantity } = getValuesStatic(ele);
      const itemTotal = cost * quantity; 
      $(ele).children(".total").text(`$${itemTotal}`);
  
      total += itemTotal; 
    });
  
    $(".results").text(`The total is: ${total}`); 
  }
  
  function removeB() {
    $(document).on("click", ".remove", function () {
      $(this).closest("tr").remove();
      getTotals();
    });
  }
  
  $(document).ready(function () {
  
    $(document).on("input", "tr input", function () {
      getTotals();
    });
  
    $("#addStock").on("submit", function (e) {
      e.preventDefault();
      var item = $(this).children('[name=item]').val();
      var cost = $(this).children('[name=cost]').val();
      var quantity = $(this).children('[name=quantity]').val();
      let total = cost * quantity;
  
      $('tbody').append('<tr>' +
        '<td class="name">' + item + '</td>' +
        '<td class="cost"><input type="number" value="' + cost + '" /></td>' +
        '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
        '<td class="total"></td>' +
        '<td><button class="btn btn-danger remove">remove</button></td>' +
        '</tr>');
  
      getTotals();
      $(this).children('[name=item]').val("");
      $(this).children('[name=cost]').val("");
      $(this).children('[name=quantity]').val("");
    });
  
    removeB();
  
  });
  






























/*let totalValue = function (ele){
    let cost = parseFloat($(ele).find(".cost input").val());
    let quantity =  parseFloat($(ele).find(".quantity input").val());

    let total = cost * quantity;
    $(ele).children(".total").text(total)

    return total;
}
function getTotals(){
    let totalArray = [];
    $("tbody tr").each(function(i,ele){
        let total = totalValue(ele);
        totalArray.push(total)

        
    })
    let trys = totalArray.reduce(function(acc,actual){
        return acc + actual;
    },0)
    $(".result").text(trys);
}
function removeB(){
   $(document).on("click",'.remove',function(e){
        $(this).closest('tr').remove();
        getTotals();
   })
}


$(document).ready(function(){
    getTotals();
    removeB();
    var timeout;
    $(document).on('input', 'tr input', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        getTotals();
      }, 1000);
    });
    $('#addStock').on('submit', function (event) {
        event.preventDefault();
        var name = $(this).children('[name=name]').val();
        var cost = $(this).children('[name=cost]').val();
        var marketPrice = $(this).children('[name=marketPrice]').val();
      
        $('tbody').append('<tr>' +
          '<td class="name">' + name + '</td>'+
          '<td class="cost"><input type="number" value="' + cost + '" /></td>' +   '<td class="quantity"><input type="number" value="' + marketPrice + '" />'+
          '<td class="total"></td>'+
          '<td><button class="btn btn-light btn remove">remove</button></td>' +
        '</tr>');
   
        getTotals();
        $(this).children('[name=name]').val('');
        
    $(this).children('[name=cost]').val('');
        $(this).children('[name=marketPrice]').val('');
      });
})
*/