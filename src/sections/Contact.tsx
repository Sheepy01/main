import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  return <div className='py-16'>
    <div className='container'>
      <div className=''>
        <h2>Let's create something amazing together</h2>
        <p>Ready to bring your next project to life? Let's connect and discuss how we can help you achieve your goals</p>
        <button>
          <span>Contact Us</span>
          <ArrowUpRightIcon/>
        </button>
      </div>
    </div>
  </div>;
};
