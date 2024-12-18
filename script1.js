const purchaseBtns = document.querySelectorAll(".purchase-button"); 
        console.log(purchaseBtns); 

        purchaseBtns.forEach((purchaseBtn) => {
            purchaseBtn.addEventListener("click", (e)=> {
                e.preventDefault(); 
                alert("Complete purchase at your LMS"); 
            })
        }); 