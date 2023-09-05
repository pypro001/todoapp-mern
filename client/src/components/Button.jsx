const Button = ({ isLoadingPost, title, ...rest }) => {
    return (
      <button
        {...rest}
        type="submit"
        className="bg-orange text-white rounded-2xl shadow-md w-[150px] my-2 py-2 transition-all duration-100 hover:bg-blue-600"
      >
        {isLoadingPost ? "Adding ... !!!" : "Add Todo"}
      </button>
    );
  };
  
  export default Button;