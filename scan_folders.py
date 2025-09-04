#!/usr/bin/env python3
"""
Script para escanear pastas de galeria e gerar arquivos JSON automaticamente
"""

import os
import json
from pathlib import Path

def scan_folder(folder_path):
    """Escaneia uma pasta e retorna lista de arquivos de mídia"""
    if not os.path.exists(folder_path):
        return []
    
    media_files = []
    extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', '.mp4', '.webm', '.ogg', '.avi', '.mov']
    
    for file in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file)
        if os.path.isfile(file_path):
            ext = os.path.splitext(file)[1].lower()
            if ext in extensions:
                # Extrair número do nome do arquivo (pode ter sufixos como -ST, -C, etc.)
                name_without_ext = os.path.splitext(file)[0]
                
                # Tentar extrair número do início do nome
                import re
                number_match = re.match(r'^(\d+)', name_without_ext)
                if number_match:
                    file_number = int(number_match.group(1))
                    media_files.append({
                        'id': file_number,
                        'fileName': file,
                        'filePath': f"{folder_path}/{file}",
                        'extension': ext,
                        'type': 'video' if ext in ['.mp4', '.webm', '.ogg', '.avi', '.mov'] else 'image'
                    })
                else:
                    # Se não conseguir extrair número, usar o nome completo como ID
                    media_files.append({
                        'id': len(media_files) + 1,
                        'fileName': file,
                        'filePath': f"{folder_path}/{file}",
                        'extension': ext,
                        'type': 'video' if ext in ['.mp4', '.webm', '.ogg', '.avi', '.mov'] else 'image'
                    })
    
    # Ordenar por ID
    media_files.sort(key=lambda x: x['id'])
    return media_files

def get_category_from_filename(filename, filters):
    """Determina categoria baseada no nome do arquivo"""
    filename_lower = filename.lower()
    
    category_map = {
        'character': ['character', 'char', 'personagem'],
        'environment': ['environment', 'env', 'ambiente'],
        'creature': ['creature', 'criatura'],
        'props': ['props', 'prop', 'objeto'],
        'portrait': ['portrait', 'retrato'],
        'facial': ['facial', 'face', 'rosto'],
        'body': ['body', 'corpo'],
        'hand': ['hand', 'mao', 'mão'],
        'advanced': ['advanced', 'avancado', 'avançado'],
        'walk': ['walk', 'caminhada', 'locomocao', 'locomoção'],
        'combat': ['combat', 'combate'],
        'idle': ['idle', 'parado'],
        'special': ['special', 'especial'],
        'vehicle': ['vehicle', 'veiculo', 'veículo'],
        'weapon': ['weapon', 'arma'],
        'building': ['building', 'construcao', 'construção'],
        'medieval': ['medieval'],
        'modern': ['modern', 'moderno'],
        'futuristic': ['futuristic', 'futurista'],
        'natural': ['natural'],
        'menu': ['menu'],
        'game': ['game', 'jogo'],
        'shop': ['shop', 'loja'],
        'settings': ['settings', 'config', 'configuracao', 'configuração']
    }
    
    for category, keywords in category_map.items():
        if any(keyword in filename_lower for keyword in keywords):
            if any(filter['id'] == category for filter in filters):
                return category
    
    # Fallback para primeira categoria disponível
    available_category = next((f['id'] for f in filters if f['id'] != 'all'), 'character')
    return available_category

def generate_title(filename, folder_name):
    """Gera título baseado no nome do arquivo"""
    name_without_ext = os.path.splitext(filename)[0]
    folder_display = folder_name.replace('-', ' ').title()
    
    if name_without_ext.isdigit():
        return f"{folder_display} - Item {name_without_ext}"
    
    return name_without_ext.replace('_', ' ').replace('-', ' ').title()

def generate_description(filename, folder_name):
    """Gera descrição baseada no tipo de arquivo"""
    ext = os.path.splitext(filename)[1].upper()
    folder_display = folder_name.replace('-', ' ').title()
    
    if ext == '.GIF':
        return 'Animated GIF'
    elif ext in ['.MP4', '.WEBM', '.OGG', '.AVI', '.MOV']:
        return 'Video File'
    else:
        return f"{folder_display} - {ext[1:]} Image"

def main():
    """Função principal"""
    print("🔍 Escaneando pastas de galeria...")
    
    # Configurações das galerias
    gallery_config = {
        "concept-art": {
            "title": "Concept Art",
            "description": "Arte conceitual original criada para dar vida a mundos fantásticos. Cada peça é desenvolvida com atenção aos detalhes.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "character", "name": "Personagens"},
                {"id": "environment", "name": "Ambientes"},
                {"id": "creature", "name": "Criaturas"},
                {"id": "props", "name": "Props"}
            ],
            "items": []
        },
        "illustration": {
            "title": "Illustration",
            "description": "Ilustrações digitais detalhadas que contam histórias visuais únicas. Cada obra é criada com paixão e atenção aos detalhes.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "portrait", "name": "Retratos"},
                {"id": "environment", "name": "Ambientes"},
                {"id": "character", "name": "Personagens"},
                {"id": "creature", "name": "Criaturas"}
            ],
            "items": []
        },
        "3d-model": {
            "title": "3D Model",
            "description": "Modelos 3D otimizados para Roblox com alta qualidade visual. Criamos assets únicos e detalhados.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "character", "name": "Personagens"},
                {"id": "vehicle", "name": "Veículos"},
                {"id": "weapon", "name": "Armas"},
                {"id": "building", "name": "Construções"}
            ],
            "items": []
        },
        "buildings": {
            "title": "Buildings",
            "description": "Arquiteturas e ambientes imersivos que criam mundos únicos. Desenvolvemos cenários detalhados e atmosféricos.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "medieval", "name": "Medieval"},
                {"id": "modern", "name": "Moderno"},
                {"id": "futuristic", "name": "Futurista"},
                {"id": "natural", "name": "Natural"}
            ],
            "items": []
        },
        "gui-ui": {
            "title": "GUI/UI",
            "description": "Interfaces intuitivas para Roblox com design moderno e funcional. Criamos UIs que melhoram a experiência do usuário.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "menu", "name": "Menus"},
                {"id": "game", "name": "Game UI"},
                {"id": "shop", "name": "Loja"},
                {"id": "settings", "name": "Configurações"}
            ],
            "items": []
        }
    }
    
    video_config = {
        "rig": {
            "title": "Rig",
            "description": "Character rigging profissional para animações fluidas e expressivas. Criamos sistemas de rigging avançados para personagens únicos.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "facial", "name": "Facial"},
                {"id": "body", "name": "Body"},
                {"id": "hand", "name": "Hand"},
                {"id": "advanced", "name": "Avançado"}
            ],
            "items": []
        },
        "animations": {
            "title": "Animations",
            "description": "Animações fluidas e expressivas que dão vida aos personagens. Criamos movimentos naturais e impactantes.",
            "filters": [
                {"id": "all", "name": "Todos"},
                {"id": "walk", "name": "Locomoção"},
                {"id": "combat", "name": "Combate"},
                {"id": "idle", "name": "Idle"},
                {"id": "special", "name": "Especiais"}
            ],
            "items": []
        }
    }
    
    # Mapeamento de pastas para configurações
    folder_mapping = {
        "ConceptArt": ("concept-art", gallery_config),
        "Illustration": ("illustration", gallery_config),
        "3DModel": ("3d-model", gallery_config),
        "Buildings": ("buildings", gallery_config),
        "GUI-UI": ("gui-ui", gallery_config),
        "Rig": ("rig", video_config),
        "Animations": ("animations", video_config)
    }
    
    # Escanear cada pasta
    for folder_name, (config_key, config_dict) in folder_mapping.items():
        print(f"📁 Escaneando {folder_name}...")
        
        if os.path.exists(folder_name):
            files = scan_folder(folder_name)
            print(f"   Encontrados {len(files)} arquivos")
            
            # Converter arquivos para itens da galeria
            items = []
            for file_info in files:
                category = get_category_from_filename(file_info['fileName'], config_dict[config_key]['filters'])
                title = generate_title(file_info['fileName'], folder_name)
                description = generate_description(file_info['fileName'], folder_name)
                
                item = {
                    "id": file_info['id'],
                    "category": category,
                    "image": file_info['filePath'],
                    "title": title,
                    "description": description,
                    "isVideo": file_info['type'] == 'video' and file_info['extension'] in ['.mp4', '.webm', '.ogg', '.avi', '.mov'],
                    "isGif": file_info['extension'] == '.gif'
                }
                items.append(item)
            
            config_dict[config_key]['items'] = items
        else:
            print(f"   Pasta {folder_name} não encontrada")
    
    # Salvar arquivos JSON
    with open('gallery-config.json', 'w', encoding='utf-8') as f:
        json.dump(gallery_config, f, indent=2, ensure_ascii=False)
    
    with open('video-config.json', 'w', encoding='utf-8') as f:
        json.dump(video_config, f, indent=2, ensure_ascii=False)
    
    print("✅ Arquivos JSON gerados com sucesso!")
    print("📊 Resumo:")
    
    for folder_name, (config_key, config_dict) in folder_mapping.items():
        item_count = len(config_dict[config_key]['items'])
        print(f"   {folder_name}: {item_count} arquivos")

if __name__ == "__main__":
    main()
