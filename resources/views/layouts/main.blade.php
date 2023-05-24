<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
<head>
	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<title>@yield('title','') | Radmin - Laravel Admin Starter</title>
    @include('include.head')
    <script src="{{ asset('js/jquery.mask.min.js') }}" type="text/javascript"></script>
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
	<!-- initiate head with meta tags, css and script -->

</head>
<body id="app" >
    <div class="wrapper">
    	<!-- initiate header-->
    	@include('include.header')
    	<div class="page-wrap">
	    	<!-- initiate sidebar-->
	    	@include('include.sidebar')

	    	<div class="main-content">
	    		<!-- yeild contents here -->
	    		@yield('content')
	    	</div>

	    	<!-- initiate chat section-->
	    	@include('include.chat')


	    	<!-- initiate footer section-->
	    	@include('include.footer')

    	</div>
    </div>

	<!-- initiate modal menu section-->
	@include('include.modalmenu')

	<!-- initiate scripts-->
	@include('include.script')
    <script>
        $(function () {
            $('.uang').mask('#.##0,00', {
				reverse: true,
				allowNegative: true,
				translation: {
					'#': {
						pattern: /-|\d/,
						recursive: true
					}
				},
				onChange: function(value, e) {
					let target = e.target,
						position = target.selectionStart; // Capture initial position

					target.value = value.replace(/(?!^)-/g, '').replace(/^,/, '').replace(/^-,/, '-');

					target.selectionEnd = position; // Set the cursor back to the initial position.
				}
			});
        });
    </script>
</body>
</html>
