import "./CardFormulario.css";

const CardFormulario = () => {
  return (
    <div className="container-formulario">
      <div className="card-formulario-vend">
        <img id="photo-form" src="/img/foto.png" alt="" />
        <p id="name-form">Kayley Hall</p>
        <p id="profile-form">View profile</p>
      </div>
      <form action="">
        <input
          className="input-form mt-6 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="text"
          placeholder="Name"
        />
        <input
          className="input-form mt-6 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="text"
          placeholder="Phone"
        />
        <input
          className="input-form mt-6 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="email"
          placeholder="Email"
        />
        <input
          className="input-form mt-6 mb-6 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type=""
          placeholder="Hello, I am interested in..."
        />
        <button className="button-form">
          Learn More <img className="" src="/img/flechaN.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default CardFormulario;
