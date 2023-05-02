import styled from 'styled-components'

export const StyledPlayer = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: lightgray;

  .trackInfo__grid {
    width: 200px;
    margin: 0 20px;

    .artist {
      font-size: 12px;
      color: gray;
    }
  }
  
  .volumeUp {
    margin-left: auto;
  }
`