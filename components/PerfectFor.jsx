import Image from 'next/image';

const PerfectForSection = () => {
  const items = [
    {
      title: 'New to IT',
      description:
        'Those who have never worked in IT and want to learn a completely new profession from scratch.',
      imageSrc: '/img/1.png', // Replace with the correct path
    },
    {
      title: 'Self-Study QA',
      description:
        'Those who are studying QA on their own and want to organize and systematize their knowledge.',
      imageSrc: '/img/2.png', // Replace with the correct path
    },
    {
      title: 'IT Professionals',
      description:
        'Those already working in IT who want to get acquainted with our school and course while improving their QA skills.',
      imageSrc: '/img/3.png', // Replace with the correct path
    },
    {
      title: 'Career Shifters',
      description:
        'Those in related positions who are looking to shift their career direction.',
      imageSrc: '/img/4.png', // Replace with the correct path
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-customBlue dark:text-yellow-500 mb-4">
          Is This For You?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          This week-long training is perfect for:
        </p>
        <div className="grid gap-4 grid-cols-2 sm:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg shadow-md items-center space-x-4"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={200}
                height={85}
                className="rounded-lg"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2 text-customBlue">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectForSection;
