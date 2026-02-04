import { useState } from 'react';
import { ChevronRight, X, User, Archive, Ban, Lock, HelpCircle, Info } from 'lucide-react';
import Navbar from './Navbar';

export default function AccountSettings() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <div className="flex flex-col h-screen w-full bg-gray-50">
        <Navbar/>
        
        <main className="flex-1 pt-20 lg:ml-64 p-6 transition-all duration-300 overflow-hidden">
          <div className="h-full w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mx-4">
            <div className="min-h-screen bg-slate-50 p-6">
              <div className="max-w-2xl mx-auto">
                
                <h1 className="text-3xl font-bold text-slate-800 mb-6">Paramètres du compte</h1>
                
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden w-full h-full p-6 ">
                  
                  <ItemSetting 
                    icon={<User className="w-5 h-5 text-blue-600" />}
                    p1="Profil"
                    description="Gérer vos informations personnelles"
                    onClick={() => setActiveModal('profil')}
                  />

                  <ItemSetting 
                    icon={<Archive className="w-5 h-5 text-purple-600" />}
                    p1="Archives"
                    description="Accéder à vos conversations archivées"
                    onClick={() => setActiveModal('archives')}
                  />

                  <ItemSetting 
                    icon={<Ban className="w-5 h-5 text-red-600" />}
                    p1="Bloqués"
                    description="Gérer la liste des utilisateurs bloqués"
                    onClick={() => setActiveModal('bloques')}
                  />

                  <ItemSetting 
                    icon={<Lock className="w-5 h-5 text-orange-600" />}
                    p1="Sécurité et mot de passe"
                    description="Modifier ou récupérer votre mot de passe"
                    onClick={() => setActiveModal('securite')}
                  />

                  <ItemSetting 
                    icon={<HelpCircle className="w-5 h-5 text-green-600" />}
                    p1="Aide"
                    description="Obtenir de l'aide et consulter la FAQ"
                    onClick={() => setActiveModal('aide')}
                  />
                  
                  <ItemSetting 
                    icon={<Info className="w-5 h-5 text-indigo-600" />}
                    p1="À propos de MyChat"
                    description="Version, conditions d'utilisation et confidentialité"
                    onClick={() => setActiveModal('apropos')}
                  />

                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Modals */}
        {activeModal === 'profil' && (
          <ModalProfil onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'archives' && (
          <ModalArchives onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'bloques' && (
          <ModalBloques onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'securite' && (
          <ModalSecurite onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'aide' && (
          <ModalAide onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'apropos' && (
          <ModalApropos onClose={() => setActiveModal(null)} />
        )}
      </div>
    </div>
  );
}

function ItemSetting({ icon, p1, description, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-3 text-left">
        {icon}
        <div>
          <h3 className="font-semibold text-slate-800">{p1}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
    </button>
  );
}

// Modal Profil
function ModalProfil({ onClose }) {
  const [notificationsEmail, setNotificationsEmail] = useState(true);
  const [profilPublic, setProfilPublic] = useState(true);
  const [afficherStatut, setAfficherStatut] = useState(false);

  return (
    <ModalBase onClose={onClose} title="Paramètres du profil">
      <div className="space-y-4">
        <ToggleOption
          label="Notifications par email"
          description="Recevoir des notifications sur votre email"
          enabled={notificationsEmail}
          onToggle={() => setNotificationsEmail(!notificationsEmail)}
        />
        <ToggleOption
          label="Profil public"
          description="Permettre aux autres de voir votre profil"
          enabled={profilPublic}
          onToggle={() => setProfilPublic(!profilPublic)}
        />
        <ToggleOption
          label="Afficher le statut en ligne"
          description="Les autres peuvent voir quand vous êtes en ligne"
          enabled={afficherStatut}
          onToggle={() => setAfficherStatut(!afficherStatut)}
        />
      </div>
    </ModalBase>
  );
}

// Modal Archives
function ModalArchives({ onClose }) {
  const [autoArchive, setAutoArchive] = useState(false);

  return (
    <ModalBase onClose={onClose} title="Archives">
      <div className="space-y-4">
        <ToggleOption
          label="Archivage automatique"
          description="Archiver automatiquement les conversations inactives après 30 jours"
          enabled={autoArchive}
          onToggle={() => setAutoArchive(!autoArchive)}
        />
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            Vous avez <span className="font-semibold">0 conversation archivée</span>
          </p>
        </div>
      </div>
    </ModalBase>
  );
}

// Modal Bloqués
function ModalBloques({ onClose }) {
  const [bloquerNonContacts, setBloquerNonContacts] = useState(false);

  return (
    <ModalBase onClose={onClose} title="Utilisateurs bloqués">
      <div className="space-y-4">
        <ToggleOption
          label="Bloquer les non-contacts"
          description="Bloquer automatiquement les messages des personnes qui ne sont pas dans vos contacts"
          enabled={bloquerNonContacts}
          onToggle={() => setBloquerNonContacts(!bloquerNonContacts)}
        />
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            Vous avez <span className="font-semibold">0 utilisateur bloqué</span>
          </p>
        </div>
      </div>
    </ModalBase>
  );
}

// Modal Sécurité
function ModalSecurite({ onClose }) {
  const [authentification2FA, setAuthentification2FA] = useState(false);
  const [verificationConnexion, setVerificationConnexion] = useState(true);

  return (
    <ModalBase onClose={onClose} title="Sécurité et mot de passe">
      <div className="space-y-4">
        <ToggleOption
          label="Authentification à deux facteurs (2FA)"
          description="Ajouter une couche de sécurité supplémentaire à votre compte"
          enabled={authentification2FA}
          onToggle={() => setAuthentification2FA(!authentification2FA)}
        />
        <ToggleOption
          label="Vérification des connexions"
          description="Recevoir une notification lors de nouvelles connexions"
          enabled={verificationConnexion}
          onToggle={() => setVerificationConnexion(!verificationConnexion)}
        />
        <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Changer le mot de passe
        </button>
        <button className="w-full px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
          Récupérer le mot de passe
        </button>
      </div>
    </ModalBase>
  );
}

// Modal Aide
function ModalAide({ onClose }) {
  return (
    <ModalBase onClose={onClose} title="Aide">
      <div className="space-y-3">
        <button className="w-full text-left p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
          <h4 className="font-semibold text-slate-800">Centre d'aide</h4>
          <p className="text-sm text-slate-600 mt-1">Consulter les articles d'aide</p>
        </button>
        <button className="w-full text-left p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
          <h4 className="font-semibold text-slate-800">Contacter le support</h4>
          <p className="text-sm text-slate-600 mt-1">Envoyer un message à notre équipe</p>
        </button>
        <button className="w-full text-left p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
          <h4 className="font-semibold text-slate-800">FAQ</h4>
          <p className="text-sm text-slate-600 mt-1">Questions fréquemment posées</p>
        </button>
      </div>
    </ModalBase>
  );
}

// Modal À propos
function ModalApropos({ onClose }) {
  return (
    <ModalBase onClose={onClose} title="À propos de MyChat">
      <div className="space-y-4">
        <div className="text-center py-4">
          <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-white font-bold">MC</span>
          </div>
          <h3 className="font-bold text-xl text-slate-800">MyChat</h3>
          <p className="text-slate-600 mt-1">Version 1.0.0</p>
        </div>
        <div className="space-y-2 pt-4 border-t border-slate-200">
          <button className="w-full text-left p-3 hover:bg-slate-50 rounded-lg transition-colors">
            <p className="text-slate-700">Conditions d'utilisation</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-slate-50 rounded-lg transition-colors">
            <p className="text-slate-700">Politique de confidentialité</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-slate-50 rounded-lg transition-colors">
            <p className="text-slate-700">Licences open source</p>
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

// Composant Toggle
function ToggleOption({ label, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800">{label}</h4>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`ml-4 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          enabled ? 'bg-green-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

// Modal de base
function ModalBase({ onClose, title, children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
}