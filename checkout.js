
  
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
          purchase.innerHTML = "Your purchase is being processed, thank you! </br></br>"

      })

      $('#txtCardNumber').mask("9999 9999 9999 9999")