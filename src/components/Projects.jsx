const Project = ({ data, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 pb-10 border-b-[1px] border-primary border-dotted">
      <div className="w-full md:w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col w-full gap-6 md:w-1/2">
        <div className="text-xl font-bold text-blue-500">{data.title}</div>
        <div className="text-lg">{data.description}</div>
        <div className="flex items-center gap-3 text-3xl [&>a:hover]:text-blue-500 [&>a:hover]:transition-all">
          <a href={data.live} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-globe"></i>
          </a>
          <a href={data.git} target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
