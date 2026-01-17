const Input = (props: any) => {
  return (
<div>
<label>{props.label}</label>
<br />
<input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
</div>
  );
};
 
export default Input;