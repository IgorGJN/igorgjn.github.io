// Simula um carregamento e exibe a tabela após 2 segundos
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);

    // Insere a data atual no rodapé
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    document.getElementById("date").textContent = formattedDate;
});
