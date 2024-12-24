"use client";

import Link from "next/link";

const SearchFormReset = () => {
	const reset = () => {
		const form = document.querySelector(".search-form") as HTMLFormElement;
		if (form) form.reset();
	};

	{
		console.log("reset from");
	}

	return (
		<button type="reset" onClick={reset}>
			<Link href="/" className="search-btn text-white">
				X
			</Link>
		</button>
	);
};

export default SearchFormReset;
