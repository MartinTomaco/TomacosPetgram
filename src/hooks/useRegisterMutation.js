import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useRegisterMutation = () => {
  const [mutation] = useMutation(REGISTER)
  return mutation
}