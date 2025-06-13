document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const mainContent = document.getElementById('main-content');

    const GITHUB_API_BASE_URL = 'https://api.github.com/users/';

    // Function to fetch data from GitHub API
    async function fetchGitHubData(username) {
        mainContent.innerHTML = `<p class="message">Loading...</p>`;

        try {
            // Use Promise.all to fetch user data and repos in parallel
            const [userResponse, reposResponse] = await Promise.all([
                fetch(`${GITHUB_API_BASE_URL}${username}`),
                fetch(`${GITHUB_API_BASE_URL}${username}/repos?sort=created&per_page=10`) // get latest 10 repos
            ]);

            // Check if the user was found
            if (!userResponse.ok) {
                throw new Error('User not found');
            }

            const userData = await userResponse.json();
            const reposData = await reposResponse.json();

            displayData(userData, reposData);

        } catch (error) {
            mainContent.innerHTML = `<p class="message">${error.message}</p>`;
        }
    }

    // Function to display the fetched data
    function displayData(user, repos) {
        // Clear previous content
        mainContent.innerHTML = '';
        
        // Create Profile Card
        const profileCardHTML = `
            <div id="profile-card">
                <img src="${user.avatar_url}" alt="${user.name}">
                <h2>${user.name || user.login}</h2>
                <p class="username">@${user.login}</p>
                <p class="bio">${user.bio || 'This user has no bio.'}</p>
                <div class="stats">
                    <div><strong>${user.followers} </strong><span>Followers</span></div>
                    <div><strong>${user.following} </strong><span>Following</span></div>
                    <div><strong>${user.public_repos} </strong><span>Repos</span></div>
                </div>
            </div>
        `;

        // Create Repositories List
        let reposHTML = `
            <div id="repos-container">
                <h3>Latest Repositories</h3>
        `;
        repos.forEach(repo => {
            reposHTML += `
                <div class="repo-card">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description || 'No description provided.'}</p>
                    <div class="repo-stats">
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                        <span><i class="fas fa-circle"></i> ${repo.language || 'N/A'}</span>
                    </div>
                </div>
            `;
        });
        reposHTML += `</div>`;

        // Append to main content
        mainContent.innerHTML = profileCardHTML + reposHTML;
    }

    // Event listeners
    const performSearch = () => {
        const username = searchInput.value.trim();
        if (username) {
            fetchGitHubData(username);
        }
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});