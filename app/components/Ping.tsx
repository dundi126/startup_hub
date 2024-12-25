import React from "react";

const Ping = () => {
	return (
		<div className="realative">
			<div className="absolute -left-4 top-1">
				<span className="flex size-[11px]">
					<span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 animate-ping opacity-75 "></span>
					<span className="relative inline-flex rounded-full bg-pink-500 size-[11px] "></span>
				</span>
			</div>
		</div>
	);
};

export default Ping;
