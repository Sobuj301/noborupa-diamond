


const SectionTitle = ({ heading, subHeading }) => {
    return (
            <div className='w-1/2 md:w-1/3 mx-auto text-center mb-10 mt-10'>
                <p className="mb-2 text-yellow-500 text-xl">--- {subHeading} ---</p>
                <h2 className="uppercase border-y-4 py-3 font-medium">{heading}</h2>
            </div>
    );
};

export default SectionTitle;