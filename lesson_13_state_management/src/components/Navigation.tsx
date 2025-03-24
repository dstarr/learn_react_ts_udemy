import { User } from "../types/user"

const Navigation = ({ user }: { user: User }) => {
    return <div>Logged in user: {user.name}</div>
}

export default Navigation
