const InputField = ({
  checkFormEl,
  placeholder,
  name,
  value,
  title,
  handleChange,
}) => {
  return (
    <>
      <h3
        className={`${
          checkFormEl === "" || checkFormEl === "invalid_email"
            ? "text-red-500"
            : checkFormEl
            ? "text-green-500"
            : ""
        }`}
      >
        {title}
      </h3>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`bg-gray-700 ${
          checkFormEl === "" || checkFormEl === "invalid_email"
            ? "border-2 border-[#ea453a]"
            : checkFormEl
            ? "border-2 border-green-600"
            : ""
        }  rounded-md py-4 px-4 w-full text-white placeholder-gray-400 focus:outline-none`}
      />

      {checkFormEl === "" && (
        <p className="text-[#ea453a] pt-2 text-sm">ველი სავალდებულოა</p>
      )}
      {checkFormEl === "invalid_email" && (
        <p className="text-[#ea453a] pt-2 text-sm">
          გთხოვთ შეიყვანოთ სწორი მეილის ფორმატი
        </p>
      )}
    </>
  );
};

export default InputField;
