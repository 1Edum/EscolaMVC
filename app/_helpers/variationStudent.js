function variationStudent({ percentageLastMonth }) {
    return (
      <div>
        {percentageLastMonth !== null ? (
          <p>Porcentagem de alunos cadastrados no mês passado: {percentageLastMonth.toFixed(2)}%</p>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
  
  export default variationStudent;
  