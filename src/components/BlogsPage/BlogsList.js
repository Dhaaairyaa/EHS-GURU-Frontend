import React, { useState } from 'react';
import blogs from "../../data/blogs";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogsList = () => {
  const [currList, setCurrList] = useState(blogs); 
  const [filtered , setFiltered] = useState(false);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value; // YYYY-MM format
    if (!selectedMonth) {
      setCurrList(blogs); 
      return;
    }
    setFiltered(true);

    const filteredBlogs = blogs.filter((blog) => {
      const blogDate = new Date(blog.date);
      const blogMonthYear = `${blogDate.getFullYear()}-${(blogDate.getMonth() + 1).toString().padStart(2, '0')}`;
      return blogMonthYear === selectedMonth;
    });

    setCurrList(Array.isArray(filteredBlogs) ? filteredBlogs : []); 
  };

  return (
    <div className="bg-white p-20">
        <div className="flex space-x-2">
            <h1>Filter Blogs by publishing Month</h1>
            <input className="text-[#175B34]" type="month" onChange={handleMonthChange} />
            {
            filtered && (
                <div className="text-[#FF0000]">
                    <button onClick={()=>{
                        setFiltered(false);
                        setCurrList(blogs);

                    }}>Reset Filter</button>
                </div>
            )
        }
        </div>



      <div className="grid grid-cols-3 gap-10 pt-8">
        {Array.isArray(currList) && currList.length > 0 ? (
          currList.map((blog, index) => (
            <div className="flex flex-col w-[350px] h-[560px] border-b-4 rounded-md">
                <div className="h-[300px] w-full">
                    <img className="w-full h-full object-cover rounded-md" src={blog.ImgrUrl} alt={blog.title}/>
                </div>
                <div className="pl-3 pr-3 pt-5">
                    <p>{new Date(blog.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                    </p>
                    <p className="">Contributed by - {blog.author}{blog.co_author ? ` and ${blog.co_author}` : ''}</p>
                    <div className="h-[100px]">
                        <h1 className="text-xl pt-2 hover:text-decoration-line: underline">{blog.title}</h1>
                    </div>
                    <div className="flex justify-end pt-5">
                        <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-lg pt-2 transform hover:scale-105 transition-transform duration-200 text-[#175B34]">
                            Read Blog <FontAwesomeIcon className="ml-1 text-sm" icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>
          ))
        ) : (
          <p>No blogs available for this month.</p>
        )}
      </div>
    </div>
  );
};

export default BlogsList;
