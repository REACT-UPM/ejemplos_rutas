import { redirect } from "react-router"
import { deleteContact } from "../contacts"

export async function Action({ params }) {
  await deleteContact(params.contactId)
  return redirect("/react-router-tutorial/")
}
