(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

  
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems);
 

    const checkbox = document.querySelector('.checkbox')
    checkbox.addEventListener('change', () => {
        
          billingfirstname.value = shippingfirstname.value
          M.updateTextFields(billingfirstname)
          billinglastname.value = shippinglastname.value
          M.updateTextFields(billinglastname)
          billingcompany.value = shippingcompany.value
          M.updateTextFields(billingcompany)
          billingaddress1.value = shippingaddress1.value
          M.updateTextFields(billingaddress1)
          billingaddress2.value = shippingaddress2.value
          M.updateTextFields(billingaddress2)
          billingstate.value = shippingstate.value
          M.FormSelect.init(billingstate)
          billingcity.value = shippingcity.value
          M.updateTextFields(billingcity)
          billingzip.value = shippingzip.value
          M.updateTextFields(billingzip)
       
      })

      const purchase = document.querySelector('.purchase-form')
      purchase.addEventListener('submit', (e) => {
          e.preventDefault()
          purchase.innerHTML = "Your purchase is being processed, consider buying more fuel!"

      })

      $('#txtCardNumber').mask("9999 9999 9999 9999")
},{}]},{},[1]);
