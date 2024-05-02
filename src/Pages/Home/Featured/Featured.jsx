import SectionTitle from "../../../Shared/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="mb-20">
            <SectionTitle heading="diamond" subHeading="Why You Should Try"></SectionTitle>
            <div className="md:flex justify-between items-center gap-6 mx-24">
            <div className="">
                <img className="rounded-lg" src={featured} alt="" />
            </div>
            <div className="flex-1 space-y-3">
                <h2 className="font-medium text-3xl">What is  Diamond?</h2>
                <p className="text-xl font-normal">Diamonds reimagined. Created using</p>
                <p>Experience unparalleled luxury withAD, the world’s leading diamond alternative brand, favored by over 100 million social media engagements and customers in 150 countries!

                Our groundbreaking, exclusive technology creates Satéur Moissanite and AD Gems® that are indistinguishable from diamonds to the naked eye, offering you the ultimate luxury at a fraction of the cost.

                </p>
            </div>
        </div>
        </div>
    );
};

export default Featured;