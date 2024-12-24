import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";
import "../global-styles.css";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const posts = [
		{
			_createdAT: new Date(),
			views: 90,
			author: { _id: 1, name: "Allen" },
			_id: 1,
			description: "This is robot startup",
			image:
				"https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?t=st=1734133894~exp=1734137494~hmac=7a98981b098ee3c7e19cad9ae3fb60df10369df1060a59432243a8b3ad912e8d&w=1380",
			category: "Robots",
			titel: "we robots",
		},
	];

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch Your Startup, <br />
					Connect With Entrepreneurs
				</h1>

				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
					Competitions.
				</p>
				<SearchForm query={query} />
			</section>

			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : "All Startups"}
				</p>
				<ul className="card_grid mt-7 ">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: numbers) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}
