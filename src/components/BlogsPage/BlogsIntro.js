import React from 'react';

const BlogsIntro = () => {
  return (
    <div className="bg-[#175B34] h-[400px] flex justify-between items-center">
        <div className="w-2/3">
            <p className="text-2xl p-20 text-white text-center">
              Explore the Latest Expert Insights and Articles on Ergonomics, Workplace Safety, ESG & Sustainability, Fire & Electrical Safety, Legal Services, and More from EHS GURU
            </p>
        </div>
        <div className="w-1/3 h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/fields_im.png?alt=media&token=04860c57-538f-43c0-89d6-bf9c47d54be7)' }}>
</div>

    </div>
  );
};

export default BlogsIntro;
