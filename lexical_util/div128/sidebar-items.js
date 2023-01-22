window.SIDEBAR_ITEMS = {"fn":[["fast_u128_divrem","Fast division/remainder algorithm for u128, without a fast native approximation."],["moderate_u128_divrem","Fast division/remainder algorithm for u128, without a fast native approximation."],["pow2_u128_divrem","Calculate a div/remainder algorithm optimized for power-of-two radixes. This is trivial: the number of digits we process is `64 / log2(radix)`. Therefore, the `shr` is `log2(radix) * digits`, and the mask is just the lower `shr` bits of the digits."],["slow_u128_divrem","Optimized fallback division/remainder algorithm for u128."],["u128_divrem","Calculate the div/remainder of a value based on the radix."]]};