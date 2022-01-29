import { NextPage } from 'next';
import Image from 'next/image';

const Features: NextPage = () => {
  return (
    <section id="Features" className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">
            Excersice Metric
          </h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals
            while you exercise. You can create different category of exercises
            and can track your vitals on the go.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image width={468} height={346} src="/health.svg" alt="Monitoring" />
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <Image width={468} height={346} src="/report.svg" alt="Reporting" />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch can generate a comprehensive
            report on your vitals depending on your settings either daily,
            weekly, monthly, quarterly or yearly.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch allows you to sync data
            across all your mobile devices whether iOS, Android or Windows OS
            and also to your laptop whether MacOS, GNU/Linux or Windows OS.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image width={468} height={346} src="/sync.svg" alt="Syncing" />
        </div>
      </div>
    </section>
  );
};

export default Features;
