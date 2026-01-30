
import Navbar from './Navbar'
import  { useState, useEffect, useRef } from 'react'

const USERS = [
  {
    id: 1,
    nom: "Sereina",
    photo: "https://i.pravatar.cc/150?img=1",
    statut: "en ligne"
  },
  {
    id: 2,
    nom: "Avana",
    photo: "https://i.pravatar.cc/150?img=3",
    statut: "hors ligne"
  },
  {
    id: 3,
    nom: "Carl",
    photo: "https://i.pravatar.cc/150?img=5",
    statut: "en ligne"
  },
  {
    id: 4,
    nom: "roline",
    photo: "https://i.pravatar.cc/150?img=7",
    statut: "hors ligne"
  },
  {
    id: 5,
    nom: "Lea", // L'utilisateur connecté
    photo: "https://i.pravatar.cc/150?img=9",
    statut: "en ligne"
  }
];

// Conversations initiales avec historique de messages
const CONVERSATIONS_INITIALES = [
  {
    id: 1,
    participants: [5, 1], // lea (5) et sereina (1)
    messages: [
      { id: 1, expediteur_id: 1, contenu: "Salut ! Comment ça va ?", date: new Date(Date.now() - 3600000) },
      { id: 2, expediteur_id: 5, contenu: "Ça va bien merci ! Et toi ?", date: new Date(Date.now() - 3000000) },
      { id: 3, expediteur_id: 1, contenu: "Super ! On se voit demain ?", date: new Date(Date.now() - 1800000) }
    ]
  },
  {
    id: 2,
    participants: [5, 2], // Toi (5) et Jean (2)
    messages: [
      { id: 4, expediteur_id: 2, contenu: "Tu as vu le match hier ?", date: new Date(Date.now() - 7200000) },
      { id: 5, expediteur_id: 5, contenu: "Oui, c'était incroyable !", date: new Date(Date.now() - 6000000) }
    ]
  },
  {
    id: 3,
    participants: [5, 3], // Toi (5) et Sophie (3)
    messages: [
      { id: 6, expediteur_id: 3, contenu: "N'oublie pas la réunion à 14h", date: new Date(Date.now() - 900000) },
      { id: 7, expediteur_id: 5, contenu: "Merci pour le rappel !", date: new Date(Date.now() - 600000) },
      { id: 8, expediteur_id: 3, contenu: "De rien 😊", date: new Date(Date.now() - 300000) }
    ]
  },
  {
    id: 4,
    participants: [5, 4], // Toi (5) et Lucas (4)
    messages: [
      { id: 9, expediteur_id: 4, contenu: "Hé, tu veux jouer ce soir ?", date: new Date(Date.now() - 10800000) },
      { id: 10, expediteur_id: 5, contenu: "Désolé, je suis occupé ce soir", date: new Date(Date.now() - 10000000) },
      { id: 11, expediteur_id: 4, contenu: "Pas de souci, une autre fois !", date: new Date(Date.now() - 9500000) }
    ]
  }
];


//// Formater l'heure (ex: 14:30)
const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Formater la date relative (ex: "Hier", "Il y a 2h")
const formatRelativeTime = (date) => {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "À l'instant";
  if (minutes < 60) return `Il y a ${minutes}min`;
  if (hours < 24) return `Il y a ${hours}h`;
  if (days < 7) return `Il y a ${days}j`;
  return formatTime(date);
};

// Trouver l'autre utilisateur dans une conversation
const getOtherUser = (conversation, currentUserId) => {
  const otherUserId = conversation.participants.find(id => id !== currentUserId);
  return USERS.find(user => user.id === otherUserId);
};

// Obtenir le dernier message d'une conversation
const getLastMessage = (conversation) => {
  if (conversation.messages.length === 0) return null;
  return conversation.messages[conversation.messages.length - 1];
};


// 3. COMPOSANT ITEM DE CONVERSATION (Liste gauche)


const ConversationItem = ({ conversation, currentUserId, isActive, onClick }) => {
  const otherUser = getOtherUser(conversation, currentUserId);
  const lastMessage = getLastMessage(conversation);
  
  if (!otherUser) return null;

  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer transition-colors hover:bg-gray-100 ${
        isActive ? 'bg-blue-50 border-l-4 border-blue-500' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Photo de profil */}
        <div className="relative">
          <img
            src={otherUser.photo}
            alt={otherUser.nom}
            className="w-14 h-14 rounded-full object-cover"
          />
          {/* Indicateur de statut en ligne */}
          {otherUser.statut === "en ligne" && (
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>

        {/* Infos conversation */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {otherUser.nom}
            </h3>
            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
              {lastMessage ? formatRelativeTime(lastMessage.date) : ''}
            </span>
          </div>
          
          {/* Dernier message */}
          <p className="text-sm text-gray-600 truncate">
            {lastMessage ? (
              <>
                {Number(lastMessage.expediteur_id) === currentUserId && (
                  <span className=" font-semiboldtext-blue-600">Vous: </span>
                )}
                {lastMessage.contenu}
              </>
            ) : (
              <span className="text-gray-400 italic">Aucun message</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};





const ConversationList = ({ conversations, currentUserId, selectedConversationId, onSelectConversation }) => {

    const [searchText, setSearchText] = useState('')

    
  // Trier les conversations par date du dernier message (plus récent en haut)
  const sortedConversations = [...conversations].sort((a, b) => {
    const lastMessageA = getLastMessage(a);
    const lastMessageB = getLastMessage(b);
    if (!lastMessageA) return 1;
    if (!lastMessageB) return -1;
    return lastMessageB.date - lastMessageA.date;
  });

  const filteredConversations = sortedConversations.filter((conv) => {
  // Si la barre de recherche est vide, on affiche tout
  if (!searchText.trim()) return true;
  
  // Récupérer l'autre utilisateur
  const otherUser = getOtherUser(conv, currentUserId);
  
  // Récupérer le dernier message
  const lastMessage = getLastMessage(conv);
  
  // Convertir en minuscules pour recherche insensible à la casse
  const search = searchText.toLowerCase();
  
  // Chercher dans le nom
  const nameMatch = otherUser?.nom.toLowerCase().includes(search);
   // Retourner true si on trouve dans le nom OU dans le message

    const messageMatch = lastMessage?.contenu.toLowerCase().includes(search)

   
  return nameMatch || messageMatch;
});

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
        <p className="text-sm text-gray-500 mt-1">
          {conversations.length} conversation{conversations.length > 1 ? 's' : ''}
        </p>

  <div className="mt-3">
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Rechercher une conversation..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
      </div>

      {/* Liste scrollable */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            currentUserId={currentUserId}
            isActive={conv.id === selectedConversationId}
            onClick={() => onSelectConversation(conv)}
          />
        ))
        }

        {filteredConversations.length === 0 && searchText && (
  <div className="p-8 text-center text-gray-500">
    <p>Aucune conversation trouvée pour "{searchText}"</p>
  </div>
)}
      </div>
    </div>
  );
};


// 5. COMPOSANT MESSAGE (Bulle de message)


const MessageBubble = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isOwn
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 rounded-bl-none'
        }`}
      >
        <p className="text-sm break-words">{message.contenu}</p>
        <span className={`text-xs mt-1 block ${isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
          {formatTime(message.date)}
        </span>
      </div>
    </div>
  );
};




//// 6. COMPOSANT FENÊTRE DE CHAT (Panneau droit)


const ChatWindow = ({ conversation, currentUserId, onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll automatique vers le bas quand nouveaux messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation?.messages]);

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-gray-500 text-lg">Sélectionnez une conversation pour commencer</p>
        </div>
      </div>
    );
  }

  const otherUser = getOtherUser(conversation, currentUserId);

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(conversation.id, messageText);
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header du chat */}
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={otherUser.photo}
            alt={otherUser.nom}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{otherUser.nom}</h3>
            <p className="text-sm text-gray-500">
              {otherUser.statut === "en ligne" ? (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  En ligne
                </span>
              ) : (
                'Hors ligne'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {conversation.messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Aucun message. Commencez la conversation !</p>
          </div>
        ) : (
          <>
            {conversation.messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                isOwn={msg.expediteur_id === currentUserId}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Zone de saisie */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tapez votre message..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!messageText.trim()}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};


const ChatApp = () => {
  const CURRENT_USER_ID = 5; // L'utilisateur connecté (Toi)
  
  const [conversations, setConversations] = useState(CONVERSATIONS_INITIALES);
  const [selectedConversation, setSelectedConversation] = useState(null);

  // Fonction pour envoyer un message
  const handleSendMessage = (conversationId, contenu) => {
    const newMessage = {
      id: Date.now(), // ID unique simple pour la démo
      expediteur_id: CURRENT_USER_ID,
      contenu: contenu,
      date: new Date()
    };

    // Mettre à jour la conversation avec le nouveau message
    setConversations(prevConversations =>
      prevConversations.map(conv =>
        conv.id === conversationId
          ? { ...conv, messages: [...conv.messages, newMessage] }
          : conv
      )
    );

    // Mettre à jour la conversation sélectionnée aussi
    if (selectedConversation?.id === conversationId) {
      setSelectedConversation(prev => ({
        ...prev,
        messages: [...prev.messages, newMessage]
      }));
    }

    // SIMULATION: L'autre personne répond après 2 secondes (optionnel)
    setTimeout(() => {
      const otherUser = getOtherUser(
        conversations.find(c => c.id === conversationId),
        CURRENT_USER_ID
      );
      
      const responses = [
        "D'accord !",
        "Super 😊",
        "Je vois ce que tu veux dire",
        "Merci pour l'info !",
        "Pas de problème"
      ];
      
      const autoReply = {
        id: Date.now() + 1,
        expediteur_id: otherUser.id,
        contenu: responses[Math.floor(Math.random() * responses.length)],
        date: new Date()
      };

      setConversations(prevConversations =>
        prevConversations.map(conv =>
          conv.id === conversationId
            ? { ...conv, messages: [...conv.messages, autoReply] }
            : conv
        )
      );

      if (selectedConversation?.id === conversationId) {
        setSelectedConversation(prev => ({
          ...prev,
          messages: [...prev.messages, autoReply]
        }));
      }
    }, 2000);
  };

  // Fonction pour sélectionner une conversation
  const handleSelectConversation = (conversation) => {
    // Trouver la conversation à jour depuis l'état
    const updatedConversation = conversations.find(c => c.id === conversation.id);
    setSelectedConversation(updatedConversation);
  };

  return (
    <div className="h-[80vh] flex bg-gray-100">
      {/* Panneau gauche - Liste des conversations */}
      <ConversationList
        conversations={conversations}
        currentUserId={CURRENT_USER_ID}
        selectedConversationId={selectedConversation?.id}
        onSelectConversation={handleSelectConversation}
      />

      {/* Panneau droit - Fenêtre de chat */}
      <ChatWindow
        conversation={selectedConversation}
        currentUserId={CURRENT_USER_ID}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};





// MessageContains.jsx
//const MessageContains = () => {
  //return (
    //<div className="flex h-full w-full">
      
      //{/* SECTION GAUCHE */}
      //<div className="w-[40%] p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scrollbar-hide">
        //{/* Le div suivant force une hauteur légèrement supérieure pour permettre le swipe */}
        //<div className="min-h-[101%]">
          // <h2 className="font-bold mb-4">Messages</h2>
           //{/* Ton contenu */}
        //</div>
      //</div>

      //<div className="w-[1px] h-full bg-gray-100" />

     // {/* SECTION DROITE */}
      //<div className="w-[60%] p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-gray-50/20">
        //<div className="min-h-[101%]">
         //  <h2 className="font-bold mb-4">Discussion</h2>
          // {/* Ton contenu */}
        //</div>
      //</div>

    //</div>
 // );
//}



//



function Message() {

  return <>
   <div className="flex flex-col h-screen w-full bg-gray-50"> {/* Fond légèrement gris pour faire ressortir le blanc */}
       <Navbar/>
     
<main className="flex-1 pt-20 lg:ml-64 p-6 transition-all duration-300">
        
        {/* Le conteneur de ton composant avec des bords arrondis et une ombre */}
        <div className="h-full w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <ChatApp />
        </div>

      </main>
      </div>

  </>
}

export default Message
