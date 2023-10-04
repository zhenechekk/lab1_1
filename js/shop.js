$(document).ready(function() {
	
	$('.add-to-busket-block').hide();
	
	
	$('.add-to-busket-btn').on('click', function() {
		$('.add-to-busket-block').show();
		$('.count-input').val("0");
	});
	
	$('.btn-plus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))+1;
		$('.count-input').val(a);
	});

	$('.btn-minus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))-1;
	
		if(a>=0){
		$('.count-input').val(a);
		}
		else{
			a=0;
		}
	});
	
	$('.btn-close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	$('.close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	let cart = new Array();
	cart=[];
	
	$('.ok-1').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(0, a);
	});
	$('.ok-2').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(1, a);
	});
		$('.ok-3').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(2, a);
	});
	$('.ok-4').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(3, a);
	});
		$('.ok-5').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(4, a);
	});
	
	
	function AddToCard(n, amount){
		if(amount>0) 
		{
			cart[n]=amount; 
		}
	}

	function addRow() {
		for(let i=0; i<cart.length; i++){
		
		if(cart[i]>0){
		/*	document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product"></input>
			<input readonly class="amount"></input>
			</div>`      
			) */
	
			switch(i) {
				case 0:
					//var t = "Product1";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product0"></input>
			<input readonly class="amount0"></input>
			</div>`)
			$('.product0').val("Букет Радость весны");
			$('.amount0').val(cart[i]);
					break;

				case 1: 
					//var t = "Product2";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product1"></input>
			<input readonly class="amount1"></input>
			</div>`)
			$('.product1').val("Букет Летняя нежность");
			$('.amount1').val(cart[i]);
					break;
		
				case 2:
					//var t = "Product3";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product2"></input>
			<input readonly class="amount2"></input>
			</div>`)
			$('.product2').val("Букет Осенний романтизм");
			$('.amount2').val(cart[i]);
					break;
			
				case 3:
					//var t = "Product4";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product3"></input>
			<input readonly class="amount3"></input>
			</div>`)
			$('.product3').val("Букет Зимняя сказка");
			$('.amount3').val(cart[i]);
					break;
			
				case 4:
					//var t = "Product5";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product4"></input>
			<input readonly class="amount4"></input>
			</div>`)
			$('.product4').val("Букет Радуга чувств");
			$('.amount4').val(cart[i]);
					break;

				default:
		
				case 5:
					//var t = "Product6";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product5"></input>
			<input readonly class="amount5"></input>
			</div>`)
			$('.product4').val("Букет Цветочный танец");
			$('.amount4').val(cart[i]);
					break;

				case 6:
					//var t = "Product7";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product6"></input>
			<input readonly class="amount6"></input>
			</div>`)
			$('.product4').val("Букет Розовый рассвет");
			$('.amount4').val(cart[i]);
					break;

				case 7:
					//var t = "Product8";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product7"></input>
			<input readonly class="amount7"></input>
			</div>`)
			$('.product4').val("Букет Белая элегия");
			$('.amount4').val(cart[i]);
					break;

				case 8:
					//var t = "Product9";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product8"></input>
			<input readonly class="amount8"></input>
			</div>`)
			$('.product4').val("Букет Синий океан");
			$('.amount4').val(cart[i]);
					break;

				case 9:
					//var t = "Product10";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product9"></input>
			<input readonly class="amount9"></input>
			</div>`)
			$('.product4').val("Букет Золотая осень");
			$('.amount4').val(cart[i]);
					break;

				case 10:
					//var t = "Product11";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product10"></input>
			<input readonly class="amount10"></input>
			</div>`)
			$('.product4').val("Букет Фиолетовый вихрь");
			$('.amount4').val(cart[i]);
					break;

				case 11:
					//var t = "Product12";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product11"></input>
			<input readonly class="amount11"></input>
			</div>`)
			$('.product4').val("Букет Красный пыл");
			$('.amount4').val(cart[i]);
					break;

				break;
			}
		//$('.product').val(t);
		//$('.amount').val(cart[i]);
		}
		}
	}
	
	window.clearCart = function clearCart(){
		for(let i=0; i<cart.length; i++){
			cart[i]=0;
		}
	}
	$('.cart-link').on('click', function(){
		console.log(cart);
		$('.cart-body').html('');
		addRow();
	});
	
	$('.btn-order').on('click', function() {
		//console.log(cart.length);
		for(let i=0; i<cart.length; i++){
		if(cart[i] != null){
			if(cart[i] >0) {
			var product_n = i;
			var amount = cart[i];
				$.ajax({
					type: "POST",
                    url:'/../php/insert.php',
                    method:'POST',
                    data:{
                        product_n:product_n,
                        amount:amount
                    },
                   success:function(data){
                       alert(data);
                   }
                });
			}
		}
		}
	});
	
});
