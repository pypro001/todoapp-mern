const TextField = ({ register, name, textarea, errors, select }) => {
    return (
      <>
        {textarea || select ? (
          <>
            {textarea && (
              <textarea
                className="w-64 h-12 border-2 border-orange px-5 py-2 rounded-lg"
                cols="20"
                rows="0"
                placeholder="Add here todo description"
                {...register(name, { required: true })}
              />
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-64 border-2 border-orange px-5 py-2 rounded-lg mx-2"
              placeholder="Add here todo title"
              {...register(name, { required: true })}
            />
          </>
        )}
        
      </>
    );
  };
  
  export default TextField;