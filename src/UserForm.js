export default function UserForm() {
  return (
    <form>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>

      <button>Add User</button>
    </form>
  );
}
