# Composants réutilisables – Guide d’utilisation rapide

## Button
```tsx
import { Button } from './components/Button';

<Button title="Valider" onPress={() => alert('OK!')} />
```
- Props : `title` (string), `onPress` (function), `style?`, `textStyle?`, `disabled?`

## TextInput
```tsx
import TextInput from './components/TextInput';

<TextInput placeholder="Votre texte" onChangeText={setValue} />
```
- Props : toutes celles de `TextInput` React Native + `inputStyle?`

## Spinner
```tsx
import { Spinner } from './components/Spinner';

<Spinner size="large" />
```
- Props : `size?` ('small' | 'large'), `style?`

---

# Lancer le workflow CI

1. **Pré-requis** : Ton projet doit être sur GitHub avec le fichier `.github/workflows/ci.yml` déjà présent (c’est le cas ici).
2. **Déclenchement** : Le workflow CI se lance automatiquement à chaque `git push` ou `pull request` sur GitHub.
3. **Ce que tu dois obtenir** :
   - Sur GitHub, dans l’onglet "Actions" de ton repo, tu verras un job "CI" qui s’exécute.
   - Il va installer les dépendances (`npm ci`) puis lancer les tests (`npm test`).
   - Si tout est vert (✔️), tes composants sont bien testés et le code est valide.
   - Si tu as une erreur, clique sur le job pour voir le détail et corriger le code.

---

# Nettoyage du code
- Supprime les imports inutilisés dans tes fichiers (`darkTheme`, `lightTheme`, etc.).
- Vérifie que tous les composants sont bien exportés/importés (nommé ou défaut).
- Ajoute un commentaire rapide en haut de chaque composant pour expliquer son usage.

---

Pour toute nouvelle intégration, inspire-toi de ces exemples. Tu peux aussi compléter ce README avec d’autres composants ou cas d’usage au fil du projet.
