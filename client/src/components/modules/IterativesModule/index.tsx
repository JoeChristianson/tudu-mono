import { IterativeCheckBox } from "../../CheckBox"
import { CurrentIteratives } from "../../CurrentTasks"
import ModuleCont from "../../ModuleCont"

type Props = {

}

const IterativesModule = ({}: Props) => {
    return <ModuleCont>
      <CurrentIteratives></CurrentIteratives>
    </ModuleCont>
}

export default IterativesModule