export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formdata = Object.fromEntries(form.entries());
    console.log(formdata);

    const res = await fetch('/pages/api/carros', {
      body: JSON.stringify(formdata),
      headers: {
        "Content=Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.JSON();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" type="text" />
      <input name="model" type="text" />
      <input name="image" type="text" />
      <textarea name="description" type="text" />
      <button type="submit">Criar Carro</button>
    </form>
  );
}
