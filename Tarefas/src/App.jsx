
import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap');
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Ubuntu Sans Mono", monospace;
  }

  html,
  body{
    width: 100%;
    height: 100%;
  }

  #root{
    background: #001B2E;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MainWrapper = styled.main`
  background: #FFEFD3;
  width: 50%;
  height: 100%;
`

const HeaderTarefas = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px;
  display: flex;
  justify-content: center;
`

const ButtonTarefas = styled.button`
  background: #294C60;
  color: #fff;
  width: fit-content;
  height: auto;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;

  &:hover{
    cursor: pointer;
    background: #ADB6C4;
    text-decoration: underline;
  }
`

const InputTarefa = styled.input`
  width: 75%;
  height: auto;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

const ListaDeTarefas = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 10px;
`

const ItemTarefa = styled.div`
  width: 100%;
  height: 10%;
  background: #FFC49B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  p{
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
  }
`

const ButtonRemover = styled.button`
  width: fit-content;
  height: 50%;
  background: #BA1B1D;
  color: #FFF;
  border: none;
  border-radius: 20px;

  &:hover{
    background: #F24333;
  }
`

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [nomeTarefa, setNomeTarefa] = useState('');

  const adicionarTarefa = () => {
    if(nomeTarefa.trim() !== ""){
      setTarefas([...tarefas, nomeTarefa])
      setNomeTarefa('');
    }else{
      alert("Digite algo antes de adicionar tarefa!")
    }
  }

  const removerTarefa = (index) => {
      const nomeTarefa = [...tarefas];
      nomeTarefa.splice(index, 1)
      setTarefas(nomeTarefa)
  }



  return (
    <>
      <MainWrapper>
        <HeaderTarefas>
          <ButtonTarefas onClick={adicionarTarefa}>
            Adicionar tarefa
          </ButtonTarefas>
          <InputTarefa type='text' onChange={(e) => setNomeTarefa(e.target.value)} placeholder='Estudar react...'/>
        </HeaderTarefas>
        <ListaDeTarefas>
        {tarefas.map((tarefa, index) => (
            <>
              <ItemTarefa key={index}>
                <p>{tarefa}</p>
                <ButtonRemover onClick={() => removerTarefa(index)}>Remover</ButtonRemover>
              </ItemTarefa>
            </>
          ))}
        </ListaDeTarefas>
      </MainWrapper>
    </>
  )
}

export default App
